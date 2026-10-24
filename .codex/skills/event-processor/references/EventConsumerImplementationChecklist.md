# Event Consumer Implementation Checklist
## Template for Creating New Entity Event Processors (Based on PersonEventDataProcessor Pattern)

When creating a new event consumer for a similar entity (e.g., Company, Department, Product), follow this checklist to ensure consistency with the existing architecture:

### 1. **Domain Model (Root Aggregate)**
   - Create a `[EntityName]Root` class
   - **For StaticData consumers** (single entity, read-mostly): inherit from `StaticDataDocDbAggregateRoot` in `WorkorderLogin.DAL/Collections/StaticData/Types/`
   - **For Workorder consumers** (multi-entity with relationships): inherit from appropriate domain-specific base class in `WorkorderLogin.DAL/Collections/Workorders/`
   - Implement a constructor accepting `ulong offset` and the API event type (e.g., `PlusApiCompany`)
   - Include `AuditableDates` for creation/modification tracking
       `public AuditableDates Audit { get; set; }`
      - If the root includes `TextSearch`, build tokens with field-name prefixes (for example `MethodCode_MI001`, `ClientId_42`) instead of raw values
   - Implement `UpdateFrom(ulong offset, ApiType entity)` method to merge incoming events (idempotent based on offset)
   - Use `ToId<[EntityName]Root>(id)` static helper for consistent ID generation
   - Add all required domain properties with `[Required]` attributes where needed

### 2. **Data Access Interface & Collections**
   - **For StaticData consumers** (single entity):
     - Create `I[EntityName]DbCollection` interface in `WorkorderLogin.DAL/Collections/StaticData/`
     - Define `FindByIds(IEnumerable<T> ids, CancellationToken cancellation)` method for batch lookups
     - Define `ExecuteTasks<IDbCollection, TRoot, TKey>(TrackedChanges changes, ...)` for batch write operations
   - **For Workorder consumers** (multiple related entities):
     - Create `I[EntityName]Collections` interface aggregating multiple sub-collections (e.g., Confirmed, Unconfirmed)
     - Define `Get[Entities]ById(ids, cancellation)` for each entity type
     - Use `ExecuteInBatches<>()` with optional deletion callbacks for handling cascading deletes
     - Handle related entity updates (e.g., samples linked to workorders, tasks linked to samples)

### 3. **Event Processor Class**
   - **For StaticData consumers**: Create in `StaticDataConsumerService/Common/Processor/StaticDataTypeProcessors/[EntityName]EventDataProcessor.cs`
   - **For Workorder consumers**: Create in `WorkorderConsumerService/Processors/[EntityName]EventDataProcessor.cs`
   - Inherit from `EventProcessorBase` and implement `IEventProcessor`
   - Create static readonly string(s) for each relevant event type using `typeof(ApiType).FullName`
   - Implement `EventTypes` property returning array of event type strings
   - Inject dependencies: collection interface(s), `ILogger`, `IEventConverter`

### 4. **Event Processing Logic (Process Method)**
   - **For StaticData consumers** (single entity, simple):
     - Filter events by type using `GetEventForType<ApiType>(events, EventTypeString)`
     - Extract entity IDs from received events
     - Query existing entities via `FindByIds(ids, cancellation)`
     - Create `LogGroup` for structured logging
     - Use `TrackedEntityDictionary<TId, TRoot>(existingEntities, selector)` for change tracking
   - **For Workorder consumers** (multiple entities, complex):
     - Filter multiple event types via `GetLatestOffsetEvents()` to handle deduplication
     - Handle multiple `TrackedEntityDictionary` instances (one per entity type)
     - Process events in sequence (summary → samples/tasks → sale items) respecting dependencies
     - Implement cascading updates/deletes: parent changes may trigger child entity deletion
     - Use `ExecuteInBatches()` with deletion callbacks for each entity type
     - Handle cross-entity fixup logic (e.g., ownership transfers between systems)

### 5. **Event Processing Helper Method(s)**
   - **For StaticData consumers**: Single `Process[EntityName]Events()` private method
   - **For Workorder consumers**: Multiple methods (e.g., `ProcessWorkorderSummaryEvents()`, `ProcessWorkorderSampleTaskResultsEvents()`, `ProcessWorkorderSampleSaleItemsEvents()`)
     - May include helper methods for dependency management (e.g., `RefreshSamplesAndTasks()`, `FixupUnconfirmedWorkorderOwnershipFromGelToWl()`)
   - Iterate through received events extracting entity data via `GetBody<ApiType>()`
   - For existing entities: call `UpdateFrom()` and `FlagAsUpdated()`
   - For new entities: wrap in `TrackedEntity<T>(new Root(...), EntityStatus.New)`
   - For deleted entities: call `FlagAsDeleted()` to queue for deletion
   - Log each entity change with status (New/Update/Delete) and relevant metadata

### 7. **Telemetry and Monitoring**
   - Wrap processing in `TelemetryService.GetSource().StartActivity(nameof(ProcessorClass))`
   - Call `ForProcessor(nameof(ProcessorClass))` for context tracking
   - Use `LogGroup.With()` for adding contextual fields to all log entries
   - Log key metrics: count of received events, entity IDs, operation types (New/Update)
   - Use appropriate `LoggerActions.Processor.*` constants for standardized event logging

### 8. **Structured Logging**
   - Create `LogGroup` with consumer type, processor name, and logger instance
   - Define log field keys as constants and reuse those constants in `.With()` calls (avoid inline string literals)
   - Example:

```csharp
private const string METHOD_IDS = "METHOD_IDS";
private const string METHODS = "METHODS";
private const string METHOD_TRANSLATIONS = "METHODTRANSLATIONS";
```

   - Chain `.With()` calls to add entity-specific fields (IDs, names, counts)
   - Use `.Trace()` with predefined actions (`RECEIVED_EVENTS`, `EventTypeReceived()`, etc.)
   - Log within `ProcessXxxEvents()` loop for per-entity visibility
   - Include offset/timestamp information for event ordering verification

### 9. **Change Tracking**
   - Use `TrackedEntityDictionary<TKey, TRoot>` with appropriate key type (int, string, guid)
   - Initialize with existing entities and key selector lambda
   - Track three states: New (create), Updated (modify), Unchanged (skip)
   - Call `GetTrackedEntitiesByOperation()` to get changes grouped by operation type
   - Pass tracked changes to `ExecuteTasks()` for atomic batch persistence

### 10. **Event Parsing and ID Extraction**
   - Define static readonly strings for each event type (handle multiple types per entity)
   - Use `GetEventForType<T>()` helper to filter events by type name
   - Extract IDs using entity-specific helper (e.g., `[EntityName]Root.ToId()`)
   - Handle edge cases: null/empty events, duplicate IDs via `.ToHashSet()` or `.Distinct()`
   - Convert to `List<T>` and check `.Any()` before proceeding with processing

### 10. **Dependency Injection and Registration**
   - Register collection interface(s) as Singleton in infrastructure setup
   - **For StaticData consumers**: Register processor in `SetupStaticDataConsumerProcessors()` method
   - **For Workorder consumers**: Register processor in equivalent `SetupWorkorderConsumerProcessors()` or `Program.cs`
   - Processors auto-discovered via `IEventProcessor` interface collection
   - Order registration logically (group by domain: Clients, Static Data, Workorders, etc.)
   - Ensure collections are registered before processor registration

### 12. **API Event Model Mapping**
   - Import event type from `AnglePlus.Public.APIs.Events.StaticData.[Domain]`
   - Create alias for API type: `using PlusApi[EntityName] = AnglePlus.Public.APIs.Events.[Namespace].[EntityName]`
   - Map from API event structure to domain Root aggregate
   - For nullable refs/nested optional objects, map via destination factories (for example `LegalEntityRef.CreateOrNull(api.LegalEntity)`) instead of inline ternary constructors.
   - If a destination ref/data type lacks `CreateOrNull(...)`, add it first and then consume it from mapping code.
   - Handle versioning if multiple event types represent different versions of same entity
   - Document which API fields map to which domain properties

### 13. **Cancellation and Error Handling**
   - Accept `IPartitionContext context` with `CancellationToken` for graceful shutdown
   - Pass cancellation token to all async database operations
   - Return early if no events received (`if (!events.Any()) return;`)
   - Allow exceptions to propagate for retry by consumer framework
   - Use try-finally or async patterns to ensure cleanup on cancellation

### 12. **Event Hub Configuration (Program.cs)**
   - **For StaticData consumer**: Located in `StaticDataConsumerService/Program.cs`
     - Extract event hub name using `typeof(StaticDataEntity).GetEventType().EventHubName`
     - Call `ConfigureStaticDataConsumer()` with event hub name, consumer group, batch size
     - Call `SetupStaticDataConsumerProcessors()` before building host
   - **For Workorder consumer**: Located in `WorkorderConsumerService/Program.cs`
     - Extract event hub name using `typeof(WorkorderSummary).GetEventType().EventHubName`
     - Call equivalent configuration method for workorder consumer
   - Ensure MongoDB is configured with `builder.ConfigureMongoDb(readWrite: true)`
   - Register collections via appropriate setup method (e.g., `RegisterStaticDataCollections()`, `RegisterWorkorderCollections()`)

### 15. **Testing and Validation**
   - Create unit tests for [EntityName]EventDataProcessor
   - Mock `I[EntityName]DbCollection` with test data
   - Test scenarios: no events, new entities, updated entities, multiple events per batch
   - Validate `LogGroup` captures correct context and metrics
   - Test edge cases: duplicate IDs, offset ordering, cancellation token handling
   - Verify domain model `UpdateFrom()` idempotency (offset comparison prevents old updates)

---

## Pattern Comparison: StaticData vs Workorder Consumers

### StaticData Consumer Pattern (PersonEventDataProcessor)
- **Use case**: Single entity type, read-mostly static data
- **Base class**: `StaticDataDocDbAggregateRoot`
- **Collections**: Single `I[EntityName]DbCollection`
- **Event types**: Typically 1-2 types per processor
- **Complexity**: Simple — single entity tracking, minimal cross-references
- **Persistence**: `ExecuteTasks<>()` for atomic batch writes
- **Location**: `StaticDataConsumerService/Common/Processor/StaticDataTypeProcessors/`

### Workorder Consumer Pattern (WorkorderEventDataProcessor)
- **Use case**: Multiple related entities with strong inter-dependencies
- **Base class**: Domain-specific aggregate root classes
- **Collections**: Multiple `I[EntityName]Collections` with sub-collections (Confirmed, Unconfirmed, etc.)
- **Event types**: Multiple types (3+ per processor) with cascading relationships
- **Complexity**: Advanced — relationship management, cascading deletes, cross-entity fixup
- **Persistence**: `ExecuteInBatches<>()` with deletion callbacks per entity type
- **Location**: `WorkorderConsumerService/Processors/`

### Key Architectural Differences
| Aspect | StaticData | Workorder |
|--------|-----------|-----------|
| Entity Count | 1 per processor | 3+ with hierarchies |
| Relationships | Isolated | Parent-child cascading |
| Deletion Logic | Simple delete | Conditional cascading delete |
| Event Processing | Sequential single loop | Multiple specialized methods |
| State Fixup | None typically | Cross-system ownership transfers |
| Batch Operations | Single collection | Multi-collection coordination |

---

## Key Architecture Patterns Used

**Event-Driven Processing**: Events consumed from Azure Event Hubs → parsed by type → domain models → persisted to MongoDB

**Change Tracking Pattern**: Existing → TrackedEntityDictionary → Process events → Track state changes → Batch persist via ExecuteTasks/ExecuteInBatches

**Aggregate Root Pattern**: Domain logic encapsulated in Root entity with `UpdateFrom()` method handling state transitions

**Structured Logging**: All events logged with entity context via LogGroup for operational visibility and debugging

**Telemetry Integration**: Activity tracing via TelemetryService for performance monitoring and distributed tracing

---

## Reference Files

### StaticData Pattern
- Template Processor: `PersonEventDataProcessor.cs`
- Template Domain Model: `PersonRoot.cs`
- Setup/Registration: `StaticDataEventConsumerModule.cs`

### Workorder Pattern
- Template Processor: `WorkorderEventDataProcessor.cs`
- Multi-entity handling: `WorkorderRoot.cs`, `WorkorderSampleRoot.cs`, `WorkorderSampleTaskResultsRoot.cs`
- Setup/Registration: `WorkorderConsumerService/Program.cs`
- Consumer Handler: `WorkorderEventConsumerHandler.cs`
