# Pattern B — Workorder / Domain Collection

**Root base:** `WorkorderDocumentType`
**Collection base:** `WorkorderBasedDbCollection<TRoot>`
**Aggregate interface:** `IWorkorderCollections`
**DI method:** `RegisterWorkorderCollections()`

Replace `{Entity}` / `{entity}` / `{Entities}` / `{FETCH_LIMIT}` with appropriate values.

## File: `ResultEntry.DAL/Collections/Workorders/{Entity}DbCollection.cs`

```csharp
using GelPlus.Core.MongoDatabase.DocDbTypes;
using MongoDB.Driver;

namespace ResultEntry.DAL.Collections.Workorders;

public interface I{Entity}DbCollection : IAppDbShardedCollection<{Entity}Root, string, string>
{
    Task<IList<{Entity}Root>> Get{Entities}By{Key}(ICollection<{KeyType}> keys, CancellationToken token);
}

public class {Entity}DbCollection : WorkorderBasedDbCollection<{Entity}Root>, I{Entity}DbCollection
{
    public {Entity}DbCollection(IAppDocDb docDb)
        : base(docDb, CollectionNames.FetchLimits.EventHubConsumers.{FETCH_LIMIT})
    {
    }

    public Task<IList<{Entity}Root>> Get{Entities}By{Key}(ICollection<{KeyType}> keys, CancellationToken token)
    {
        if (keys.Any() != true)
        {
            return Task.FromResult<IList<{Entity}Root>>(new List<{Entity}Root>());
        }

        return Where(w => w.DocumentType == nameof({Entity}Root) && keys.Contains(w.{Key}), token);
    }
}
```

## Notes

- For complex queries requiring sorting, limits, or projections, use `Builders<{Entity}Root>.Filter` and `Collection.Find(filter)` directly.
- Use `Where(predicate, token)` for straightforward LINQ-style filters.
- Keep the interface limited to queries that are actually needed by consumers.

## IWorkorderCollections changes

**File:** `ResultEntry.DAL/Collections/IWorkorderCollections.cs`

```csharp
// 1. Interface
I{Entity}DbCollection {Entities} { get; }

// 2. WorkorderCollections primary-constructor parameter
I{Entity}DbCollection {entities}

// 3. Property (primary-constructor assignment)
public I{Entity}DbCollection {Entities} { get; } = {entities};
```

## DbCollectionsModule change

**File:** `InfrastructureModules/Setup/Modules/DbCollectionsModule.cs`

```csharp
// Inside RegisterWorkorderCollections():
builder.Services.AddSingleton<I{Entity}DbCollection, {Entity}DbCollection>();
```

## Real Example — `WorkorderDbCollection` (abridged)

```csharp
public interface IWorkorderDbCollection : IAppDbShardedCollection<WorkorderRoot, string, string>
{
    Task<IList<WorkorderRoot>> GetWorkordersById(ICollection<int> workorderIds, CancellationToken token);
    Task<WorkorderRoot?> GetByWorkorderCode(string workorderCode, CancellationToken token);
    Task<IList<WorkorderRoot>> GetWorkordersByLab(int labId, CancellationToken token);
    FilterDefinition<WorkorderRoot> GetFilterByWorkorderCode(string workorderCode);
}

public class WorkorderDbCollection : WorkorderBasedDbCollection<WorkorderRoot>, IWorkorderDbCollection
{
    public WorkorderDbCollection(IAppDocDb docDb)
        : base(docDb, CollectionNames.FetchLimits.EventHubConsumers.WORKORDER_CONSUMER_FETCH_LIMIT)
    {
    }

    public Task<IList<WorkorderRoot>> GetWorkordersById(ICollection<int> workorderIds, CancellationToken token)
    {
        if (workorderIds.Any() != true)
            return Task.FromResult<IList<WorkorderRoot>>(new List<WorkorderRoot>());

        return Where(w => w.DocumentType == nameof(WorkorderRoot) && workorderIds.Contains(w.WorkorderId), token);
    }

    public async Task<IList<WorkorderRoot>> GetWorkordersByLab(int labId, CancellationToken token)
    {
        var filter = Builders<WorkorderRoot>.Filter.And(
            Builders<WorkorderRoot>.Filter.Eq(w => w.DocumentType, nameof(WorkorderRoot)),
            Builders<WorkorderRoot>.Filter.Eq(w => w.Data.Laboratory.Id, labId));

        var sort = Builders<WorkorderRoot>.Sort
            .Descending(w => w.Audit.Modified)
            .Descending(w => w.Audit.Created);

        return await Collection.Find(filter)
            .Sort(sort)
            .Limit(CollectionNames.FetchLimits.CONFIRMED_WORKORDER_LIMIT)
            .ToListAsync(token);
    }
}
```
