---
name: event-processor
description: Process and handle events from event hubs efficiently within your applications. Use this skill when the user asks to manage/create event-driven processors.
---

## Required Workflow

Follow this workflow in order every time.

### 1. Establish the event contract

Do not execute this step unless the user has already supplied the explicit event contract list.

- Confirm the target pipeline before choosing file locations, registration points, or the lead example to follow.
- Identify every AnglePlus event CLR type that belongs to the feature.
- Do not register child event contracts when those child records are already delivered inside a subscribed parent contract and share the same aggregate boundary.
- Example: if `Method` already includes analytes in `Method.MethodAnalytes`, do not subscribe to separate `MethodAnalyte` / `MethodAnalyteTranslation` contracts unless the user explicitly asks for them.
- Define one static event-type constant per CLR type using this pattern:

```csharp
private static readonly string LegalEntityResults = typeof(AnglePlusApi.LegalEntity).FullName!;
```

- Build `RelevantEventTypes` from those constants and expose them through `EventTypes`.
- If the feature spans several related payloads, keep them in one processor only when they share the same persistence boundary or document graph.

### 2. Choose the persistence boundary

- Identify the Mongo root document type that will be created or updated.
- Identify the collection interface needed to query and persist those roots.
- If the root does not exist yet, create a new `*Root` type in the DAL that acts as the persisted shadow copy of the AnglePlus DTO. (see `/DocumentRoot.md` for example). Use the `document-root` skill for guidance on how to design the root structure and constructor.
- Model the root after the incoming AnglePlus contract, for example `AnglePlusApi.LegalEntity` -> `LegalEntityRoot`.
- The root constructor should accept the incoming event payload and offset, initialize the persisted shadow copy, and delegate field mapping to `UpdateFrom(...)`.
- For nullable DTO references and nested optional objects, prefer `CreateOrNull(...)` helpers on DAL ref/data types (for example `LegalEntityRef.CreateOrNull(dto.LegalEntity)`) instead of inline ternary `x != null ? new X(x) : null` mapping.
- Reuse existing DAL roots and collection interfaces when they already match the incoming event shape.
- If the event produces its own independent document, create a dedicated root and collection abstraction instead of forcing it into an unrelated processor.

### 3. Create constructor dependencies

- Inject the exact collection interfaces needed by the processor.
- Always accept `ILogger` and `IEventConverter` and pass them to `EventProcessorBase`.
- Do not add mutable instance state unless it is strictly required. Prefer local variables inside `Process`.

### 4. Implement `Process`

Start from this sequence:

1. Read `context.CancellationToken`.
2. Start telemetry activity with the processor name.
3. Call `ForProcessor(nameof(TheProcessor))`.
4. Pull each event group via `GetEventForType<T>(events, EventTypeConstant)`.
5. Return immediately when every relevant group is empty.
6. Materialize event bodies only after the empty-check.
7. Create a `LogGroup` and log the received event counts.
   - Always define log keys as constants and reuse those constants in `.With(...)`; do not use inline string literals for log keys.
   - Example:

```csharp
private const string METHOD_IDS = "METHOD_IDS";
private const string METHODS = "METHODS";
private const string METHOD_TRANSLATIONS = "METHODTRANSLATIONS";

logGroup.With(
	(METHOD_IDS, string.Join(",", methodIds)),
	(METHODS, methodsReceived.Count.ToString()),
	(METHOD_TRANSLATIONS, methodTranslationsReceived.Count.ToString()));
```

8. Derive the unique business identifiers needed to load existing documents using strongly typed members from the event payload body.
9. For translation envelope events, resolve parent IDs from the envelope parent reference (for example `s.GetBody<MethodTranslations>().Method.Id`) instead of reflection helpers.
10. Query the existing documents from the relevant collections.
11. Build `TrackedEntityDictionary<TKey, TRoot>` instances keyed by the stable domain identifier.
12. Process each event group in a dedicated private method.
13. Read tracked add/update buckets with `GetTrackedEntitiesByOperation()`.
14. Persist only non-empty add/update batches.
15. Use `await Task.WhenAll(tasks)` for asynchronous persistence.

Never block an async processor with `Task.WaitAll`.

### 5. Implement per-event processing methods

**When a processor handles two or more event types, each event type MUST have its own dedicated private processing method.** Never combine two event types into a single method. Call them in sequence from `Process`, passing the shared tracked dictionary:

```csharp
ProcessCountryEvents(logGroup, countriesReceived, countryTrackChanges);
ProcessCountryTranslationEvents(logGroup, countryTranslationsReceived, countryTrackChanges);
```

Each private method should:

- Iterate through the received payloads.
- Deserialize the body with `GetBody<T>()`.
- Resolve the tracked root by domain id.
- Prefer strongly typed payload access for identifiers and nested values.
- Do not add generic reflection-based ID readers (for example `ReadInt`/`ReadNestedInt`) when the event contract exposes typed members.
- If the parent relation is not available or cannot be resolved with confidence from the typed contract (for example no reliable `Parent.Id`/reference path), do not guess mappings or infer IDs heuristically; stop and ask the user for clarification about the correct parent relation.
- Create a new tracked root when no document exists, using the root constructor that wraps the AnglePlus DTO into the DAL shadow copy, for example `new LegalEntityRoot(offset, legalEntityEvent)`.
- Otherwise call the root update method and mark it updated.
- For dependent events (translations, child payloads), pass `payload.Offset` into the root update method so idempotency and `Audit.Modified` are handled inside the root.
- If dependent update methods return a `bool`, only call `FlagAsUpdated()` when they return `true`.
- Emit structured logs containing the business id, offset, and state (`New` or `Update`).

### 5.1 Null-safe mapping convention

- When mapping nullable payload members into DAL refs or nested data types, use static factory helpers on the destination type:

```csharp
LegalEntity = LegalEntityRef.CreateOrNull(eventBody.LegalEntity);
Method = TestMethodInfoData.CreateOrNull(eventBody.Method);
```

- If a needed `CreateOrNull(...)` helper does not exist yet, add it on the destination ref/data type and then use it from mapping code.
- Keep this mapping style consistent across new and updated processors to avoid repetitive null-guard ternaries.

For dependent events (e.g. translations), if the tracked root for that id does not exist in the dictionary, skip — the translation cannot be applied without the parent.

Prefer names like:

- `ProcessDepartmentEvents`
- `ProcessDepartmentTranslationEvents`
- `ProcessDepartmentCalendarEvents`

### 6. Handle multi-event processors deliberately

When one logical aggregate is fed by several event types, follow the `LegalEntityEventDataProcessor` shape:

- Gather ids from all related event groups before loading existing documents.
- Load the shared aggregate once.
- Apply the primary event first.
- Apply dependent events second, only if the aggregate exists or was created earlier in the same batch.
- If dependent data already arrives embedded in the primary event payload, process it through the primary event mapping and avoid a second dependent event subscription.
- Persist the aggregate once after all related event groups were applied.

When an event type maps to a separate document collection, keep a separate tracked dictionary and persistence batch for that collection.

### 7. Register the processor

- Add the processor to DI in the matching consumer module, following the `StaticDataEventConsumerModule` pattern.
- Register it with `builder.Services.AddSingleton<IEventProcessor, TheProcessor>();` inside the matching pipeline registration method, for example `SetupStaticDataConsumerProcessors` in `StaticDataEventConsumerModule.cs` or `SetupWorkorderConsumerProcessors` in `WorkorderEventConsumerModule.cs`.
- Keep the registration grouped with similar processors in the target pipeline.

### 8. Add focused unit tests

Create or update tests under the matching consumer test area covering at least:

- no matching events
- new document creation
- existing document update
- multiple events in one batch
- latest offset wins when duplicates for the same entity exist in a batch
- mixed new and existing entities in the same batch
- dependent child event behavior for multi-event processors

### 9. Validate behavior
- Run focused tests for the touched processor.
- If no dedicated tests exist yet, add them before broad validation.
- Do not stop after generating code; verify registration and tests compile in the touched slice.
- MANDATORY: Go through the checklist [checklist](./references/EventConsumerImplementationChecklist.md) to confirm that all steps were followed.

## Decision Rules

- Use a single processor when the event types form one aggregate or are persisted together.
- Use separate processors when events have separate collections, separate lifecycles, or unrelated identifiers.
- Prefer the simple `ReportExtraWorkorderInfoEventDataProcessor` pattern for one event type.
- Prefer the `LegalEntityEventDataProcessor` pattern only when several event types collaborate to build the same feature.
- Choose file paths, registration points, and test locations from the target event-hub pipeline, not from `StaticDataConsumerService` by default.

## Output Expectations

Unless the user asks for documentation only, you should:

1. create or update the processor
2. register it
3. add or update focused unit tests
4. summarize which event types, collections, and roots were wired

If information is missing, ask only for the missing event type, root type, or target collection details required to implement the processor safely.
