---
name: create-collection
description: "Create a new MongoDB DbCollection in ResultEntry. Use when: adding a new static-data entity collection, scaffolding shadow copy of an AnglePlus model, create collection, new DbCollection, add entity to static data, wire up IStaticDataCollections, register collection DI, add workorder collection, new domain collection, WorkorderBasedDbCollection, register collection DI."
argument-hint: "Collection type and entity name (e.g. 'StaticData: Country', 'Workorder: WorkorderChecklist')"
---

# Create DbCollection

Scaffolds all the code required to add a new MongoDB collection to ResultEntry.

> **Document Root first:** If a `{Entity}Root` does not yet exist, create it using the `document-root` skill before running these steps.

## When to Use

- Adding a new `*DbCollection` for a StaticData PlusApi entity (shadow-copy pattern)
- Adding a new `*DbCollection` for a Workorder/Domain entity
- Wiring a collection into DI and its aggregate collection interface

## Collection Types

| Type | Base Class | Aggregate Interface | DI Method |
|------|-----------|---------------------|-----------|
| **StaticData** | `StaticDataDbCollectionBase<TRoot>` | `IStaticDataCollections` | `RegisterStaticDataCollections()` |
| **Workorder / Domain** | `WorkorderBasedDbCollection<TRoot>` | `IWorkorderCollections` | `RegisterWorkorderCollections()` |

See [references/pattern-a-staticdata-collection.md](./references/pattern-a-staticdata-collection.md) and [references/pattern-b-workorder-domain-collection.md](./references/pattern-b-workorder-domain-collection.md) for full templates.

---

## Procedure — StaticData Collection

### Step 1 — Create the DbCollection

**File:** `ResultEntry.DAL/Collections/StaticData/{Entity}DbCollection.cs`

Key rules:
- Interface `I{Entity}DbCollection` extends `IAppDbShardedCollection<{Entity}Root, string, string>` **and** `ISessionDocLoader<int, {Entity}Root>`
- Always expose `FindByIds(IReadOnlyCollection<string> ids, ...)` and `GetAll(CancellationToken)` on the interface
- Single-item lookup: `FindBy{Entity}Id(int id, ...)` → `GetByStaticDataId(id, cancellation)`
- Bulk lookup: `FindBy{Entity}Ids(IReadOnlyCollection<int> ids, ...)` → `FindByStaticDataIds(ids, cancellation)`
- Use primary-constructor syntax: `{Entity}DbCollection(IAppDocDb docDb)`
- Pass `CollectionNames.FetchLimits.EventHubConsumers.STATIC_DATA_FETCH_LIMIT` to base

### Step 2 — Register in DI

**File:** `InfrastructureModules/Setup/Modules/DbCollectionsModule.cs`
**Method:** `RegisterStaticDataCollections()`

Add **before** the `IStaticDataCollections` registration line:
```csharp
builder.Services.AddSingleton<I{Entity}DbCollection, {Entity}DbCollection>();
```

### Step 3 — Register in `IStaticDataCollections`

**File:** `ResultEntry.DAL/Collections/IStaticDataCollections.cs`

```csharp
// Interface
I{Entity}DbCollection {Entities} { get; }

// Constructor parameter
I{Entity}DbCollection {entities}

// Constructor body
{Entities} = {entities};

// Property
public I{Entity}DbCollection {Entities} { get; }
```

### Step 4 — Register in `DbSession` (if needed)

**File:** `ResultEntry.DAL/Utility/Operations/Sessions/DbSession.cs`

Only needed when the entity will be loaded as part of workorder session hydration.

```csharp
// Constructor:
_staticData.AddProvider(new SessionDocProvider<{Entity}Root>(x => x.StaticDataId, collections.StaticData.{Entities}));

// Property:
public ISessionDocProvider<{Entity}Root> {Entities} => _staticData.GetProvider<{Entity}Root>();
```

---

## Procedure — Workorder / Domain Collection

### Step 1 — Create the DbCollection

**File:** `ResultEntry.DAL/Collections/Workorders/{Entity}DbCollection.cs`

Key rules:
- `TRoot` must extend `WorkorderDocumentType`
- Interface `I{Entity}DbCollection` extends only `IAppDbShardedCollection<{Entity}Root, string, string>` (no `ISessionDocLoader`)
- Use a regular constructor (not primary-constructor): `{Entity}DbCollection(IAppDocDb docDb) : base(docDb, CollectionNames.FetchLimits.EventHubConsumers.{FETCH_LIMIT})`
- Complex queries use `Builders<{Entity}Root>.Filter` directly (no helper methods from base)
- Use `Where(predicate, token)` for LINQ-style filters, or `Collection.Find(filter)` for raw MongoDB filters

### Step 2 — Register in DI

**File:** `InfrastructureModules/Setup/Modules/DbCollectionsModule.cs`
**Method:** `RegisterWorkorderCollections()`

```csharp
builder.Services.AddSingleton<I{Entity}DbCollection, {Entity}DbCollection>();
```

### Step 3 — Register in `IWorkorderCollections`

**File:** `ResultEntry.DAL/Collections/IWorkorderCollections.cs`

```csharp
// Interface
I{Entity}DbCollection {Entities} { get; }

// WorkorderCollections constructor parameter
I{Entity}DbCollection {entities}

// Property
public I{Entity}DbCollection {Entities} { get; } = {entities};
```

---

## Checklist — StaticData

- [ ] `{Entity}Root` exists (use `document-root` skill if not)
- [ ] `{Entity}DbCollection.cs` created in `ResultEntry.DAL/Collections/StaticData/`
- [ ] Interface extends `IAppDbShardedCollection` + `ISessionDocLoader<int, {Entity}Root>`
- [ ] `FindByIds` and `GetAll` declared on interface
- [ ] DI registered in `DbCollectionsModule.RegisterStaticDataCollections()`
- [ ] Property added to `IStaticDataCollections` interface and `StaticDataCollections` class
- [ ] `DbSession` wired (if required for session loading)

## Checklist — Workorder / Domain

- [ ] `{Entity}Root` exists (extends `WorkorderDocumentType`)
- [ ] `{Entity}DbCollection.cs` created in `ResultEntry.DAL/Collections/Workorders/`
- [ ] Interface extends only `IAppDbShardedCollection<{Entity}Root, string, string>`
- [ ] DI registered in `DbCollectionsModule.RegisterWorkorderCollections()`
- [ ] Property added to `IWorkorderCollections` interface and `WorkorderCollections` class
