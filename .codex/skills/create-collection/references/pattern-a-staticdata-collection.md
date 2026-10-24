# Pattern A — StaticData Collection

**Root base:** `StaticDataDocDbAggregateRoot`
**Collection base:** `StaticDataDbCollectionBase<TRoot>`
**Aggregate interface:** `IStaticDataCollections`
**DI method:** `RegisterStaticDataCollections()`

Replace `{Entity}` / `{entity}` / `{Entities}` with the entity name in appropriate casing.

## File: `ResultEntry.DAL/Collections/StaticData/{Entity}DbCollection.cs`

```csharp
using GelPlus.Core.MongoDatabase.DocDbTypes;
using ResultEntry.DAL.Collections.StaticData.Types;
using ResultEntry.DAL.Collections.StaticData.Types.Common;
using ResultEntry.DAL.Utility.Operations.Sessions;

namespace ResultEntry.DAL.Collections.StaticData;

public interface I{Entity}DbCollection : IAppDbShardedCollection<{Entity}Root, string, string>, ISessionDocLoader<int, {Entity}Root>
{
    Task<{Entity}Root?> FindBy{Entity}Id(int id, CancellationToken token);

    Task<IList<{Entity}Root>> FindBy{Entity}Ids(IReadOnlyCollection<int> ids, CancellationToken token);

    Task<IList<{Entity}Root>> FindByIds(IReadOnlyCollection<string> ids, CancellationToken token);

    Task<IList<{Entity}Root>> GetAll(CancellationToken token);
}

public class {Entity}DbCollection(IAppDocDb docDb)
    : StaticDataDbCollectionBase<{Entity}Root>(docDb, CollectionNames.FetchLimits.EventHubConsumers.STATIC_DATA_FETCH_LIMIT),
        I{Entity}DbCollection
{
    public Task<{Entity}Root?> FindBy{Entity}Id(int id, CancellationToken cancellation)
        => GetByStaticDataId(id, cancellation);

    public Task<IList<{Entity}Root>> FindBy{Entity}Ids(IReadOnlyCollection<int> ids, CancellationToken cancellation)
        => FindByStaticDataIds(ids, cancellation);

    public Task<IList<{Entity}Root>> GetAll(CancellationToken token)
        => FindAll(token);
}
```

## Notes

- `FindByIds(IReadOnlyCollection<string> ids, ...)` is already implemented on `StaticDataDbCollectionBase<TRoot>`; declare it on the interface and do **not** override it in the concrete class.
- Add entity-specific query methods only when consumers actually need them.
- If a query needs a MongoDB projection, keep the projection in a separate `Projections/` file and reference it from the collection method.

## Real Example — `CountryDbCollection`

```csharp
public interface ICountryDbCollection : IAppDbShardedCollection<CountryRoot, string, string>, ISessionDocLoader<int, CountryRoot>
{
    Task<IList<CountryRoot>> FindCoutryByIds(IReadOnlyCollection<int> bottleDeliveryIds, CancellationToken token);
    Task<IList<CountryRoot>> FindByIds(IReadOnlyCollection<string> ids, CancellationToken token);
    Task<IList<CountryRoot>> GetAll(CancellationToken token);
}

public class CountryDbCollection(IAppDocDb docDb)
    : StaticDataDbCollectionBase<CountryRoot>(docDb, CollectionNames.FetchLimits.EventHubConsumers.STATIC_DATA_FETCH_LIMIT),
        ICountryDbCollection
{
    public Task<IList<CountryRoot>> FindCoutryByIds(IReadOnlyCollection<int> bottleDeliveryIds, CancellationToken cancellation)
        => FindByStaticDataIds(bottleDeliveryIds, cancellation);

    public Task<IList<CountryRoot>> GetAll(CancellationToken token)
        => FindAll(token);
}
```

## IStaticDataCollections changes

**File:** `ResultEntry.DAL/Collections/IStaticDataCollections.cs`

```csharp
// 1. Interface
I{Entity}DbCollection {Entities} { get; }

// 2. Constructor parameter
I{Entity}DbCollection {entities}

// 3. Constructor body assignment
{Entities} = {entities};

// 4. Property
public I{Entity}DbCollection {Entities} { get; }
```

## DbCollectionsModule change

**File:** `InfrastructureModules/Setup/Modules/DbCollectionsModule.cs`

```csharp
// Inside RegisterStaticDataCollections(), before IStaticDataCollections registration:
builder.Services.AddSingleton<I{Entity}DbCollection, {Entity}DbCollection>();
```

## DbSession change (if needed)

**File:** `ResultEntry.DAL/Utility/Operations/Sessions/DbSession.cs`

```csharp
// In constructor:
_staticData.AddProvider(new SessionDocProvider<{Entity}Root>(x => x.StaticDataId, collections.StaticData.{Entities}));

// Property:
public ISessionDocProvider<{Entity}Root> {Entities} => _staticData.GetProvider<{Entity}Root>();
```
