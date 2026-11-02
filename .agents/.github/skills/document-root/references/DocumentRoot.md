# Document Root — Common Structure & Instructions

A **Document Root** is the top-level MongoDB aggregate stored in a collection. Every root wraps API data from AnglePlus and tracks both local (`Audit`) and source (`AngleTimeStamp`) timestamps, plus the event `Offset` for idempotency.

---

## Base Class

Choose the correct base depending on the entity type:

| Entity Type   | Base Class                    | Collection             |
|---------------|-------------------------------|------------------------|
| Static data   | `StaticDataDocDbAggregateRoot`| StaticData collection  |
| Workorder     | `WorkorderOnlyDocumentType`   | Workorders collection  |

---

## Required Members

### 1. Static `ToId()` factory method

Used consistently everywhere to build the document `_id`. Always delegate to the generic base helper:

```csharp
public static string ToId(int entityId) => ToId<MyEntityRoot>(entityId);
```

### 2. Protected parameterless constructor

Required by MongoDB for deserialization. Never used directly in code:

```csharp
protected MyEntityRoot() { }
```

### 3. Public constructor

Takes `(ulong offset, ApiType entity)` and calls the base class constructor, initialises all required properties, then calls `UpdateFrom`:

```csharp
public MyEntityRoot(ulong offset, PlusApi.MyEntity entity)
    : base(nameof(MyEntityRoot), ToId(entity.Id), entity.Id)
{
    Data = new MyEntityData(entity);
    AngleTimeStamp = new AuditableDates
    {
        Created = entity.CreatedDate
    };
    Audit = new AuditableDates
    {
        Created = DateTime.UtcNow
    };
    UpdateFrom(offset, entity);
}
```

> `AngleTimeStamp`, `Audit`, and the `UpdateFrom` call at the end of the constructor are **required in every root**, regardless of entity type.

### 4. `UpdateFrom(ulong offset, ApiType entity)` method

The single update entry point called by both the constructor and the event processor.
For **static data** roots, always guard against out-of-order events with the offset check:

```csharp
public void UpdateFrom(ulong offset, PlusApi.MyEntity entity)
{
    if (Offset > offset) return;   // idempotency guard — static data only
    Offset = offset;
    Audit.Modified = DateTime.UtcNow;
    Data.UpdateFrom(entity);
}
```

`UpdateFrom` must update **all mapped properties** from `PlusApi.MyEntity` — nothing should be left stale after a call. The constructor relies on it for the initial population, and the event processor relies on it for every subsequent event.

Always call `RefreshTextSearch()` at the end of `UpdateFrom` to keep the text search index current:

```csharp
public void UpdateFrom(ulong offset, PlusApi.MyEntity entity)
{
    if (Offset > offset) return;   // idempotency guard — static data only
    Offset = offset;
    Audit.Modified = DateTime.UtcNow;
    Data.UpdateFrom(entity);
    RefreshTextSearch();
}
```

Workorder roots do not use the guard; they are always called with the latest event.

### 4.1 Dependent update methods (translations, child payloads)

Any method that mutates a root from a dependent event must also receive `offset` and maintain audit/idempotency rules:

```csharp
public bool UpdateTranslations(ulong offset, PlusApi.MyEntityTranslations? translations)
{
    if (translations == null || Offset > offset) return false;

    Offset = offset;
    Audit.Modified = DateTime.UtcNow;
    Data.UpdateTranslations(translations.Translations);
    RefreshTextSearch();
    return true;
}
```

Event processors should pass `payload.Offset` into dependent update methods and flag entities as updated only when the method returns `true`.

### 5. Strongly-typed `Data` property

Holds the mapped AnglePlus payload. Keep the root lean — all entity fields live in the data object:

```csharp
[Required]
public MyEntityData Data { get; protected set; }
```

### 6. `TextSearch` and `RefreshTextSearch()`

All roots must expose a `TextSearch` field and a `RefreshTextSearch()` helper. This enables full-text filtering across the collection regardless of entity type:

```csharp
[BsonIgnoreIfNull]
public HashSet<string>? TextSearch { get; protected set; }

protected void RefreshTextSearch()
{
    string?[] values = [
        $"Code_{Data.Code}",
        $"Description_{Data.Description}"  // prefix each token with the source field name
    ];

    var set = values
        .Where(s => !string.IsNullOrWhiteSpace(s))
        .ToHashSet()!;

    TextSearch = set.Any() ? set : null;
}
```

Include every field a user might reasonably search by (codes, names, descriptions), and prefix each token with the field name (for example `MethodCode_MI001`, `ClientId_42`). Set to `null` when empty so MongoDB omits it from the document.

---

## Audit Fields

| Property        | Type             | Purpose                                              |
|-----------------|------------------|------------------------------------------------------|
| `Audit`         | `AuditableDates` | Local system timestamps (Created/Modified in UTC)    |
| `AngleTimeStamp`| `AuditableDates` | Source timestamps from AnglePlus (Created/Modified)  |
| `Offset`        | `ulong`          | Event Hub partition offset — used for idempotency    |

`Audit` reflects when **ResultEntry** last touched the document.
`AngleTimeStamp` reflects when **AnglePlus** created or modified the source entity.

---

## Workorder-specific extras

Workorder roots (extending `WorkorderOnlyDocumentType`) additionally maintain:

- **`FilterDates`** — `Dictionary<string, string>?` of named ISO-8601 date strings (Created, Committed, Released, …). Call `RefreshFilterDates()` in `UpdateFrom`.
- **`SystemOwner`** — `WorkorderSystemOwner` enum indicating whether the workorder is owned by ResultEntry or GEL.
- **`LegalEntityId` / `LabId` / `ClientId`** — indexed scalar fields used by queries and filters; update in `UpdateFrom` via a dedicated `UpdateIndexedFields()` helper.

---

## Key Rules

1. **Never set `Audit` or `Offset` outside of the constructor and `UpdateFrom`.**
2. **`DocumentType` is always `nameof(MyEntityRoot)`** — set via the base constructor; do not override.
3. **`ToId()` must be the single source of truth** for the document `_id`; use it in the processor when building upsert filters too.
4. **Static data roots guard on `Offset`**; workorder roots do not (they are always driven by the latest event).
5. **Keep the root constructor thin** — delegate field mapping to the `Data` object.
6. **Always call `RefreshTextSearch()` at the end of `UpdateFrom`** — applies to all roots, not just workorders.
7. **Every root mutation path must maintain `Audit.Modified` and `Offset`** — including dependent update methods like translations.
