---
name: consumer
description: Whenever touching the consumer functionality. Consuming or interacting with the consumer module. This includes creating, reading, updating, or deleting consumer-related data and handling consumer-specific business logic or EventHub events.
---

# Consumer Flow
A Consumer is a module that handles the consumption of EventHub events that are part of the mechanism of synching data between Gel and this microservice.
The data flows from Gel to this microservice through AnglePlus that acts as a publisher of the events.
Usually, the consumer module only saves data that is necessary for the microservice's operation. Data is stored ideally as a raw copy of the data coming from the AnglePlus Api Events.
If some other process needs to interact with the consumer data, it should go though sending a message to NServiceBus for post-processing rather than directly accessing the consumer's stored data.

## Processor Key Points
1. The consumer module handles EventHub events through Processors.
2. Processors are responsible for handling a subset of events and performing necessary actions based on the event data type.
3. Data should be checked if it's for the default subscription or for the microservice subscription before processing to ensure that only relevant events are handled.
4. Received total events should be logged.
5. Process methods are unique for each event type.
6. Processes the events using the event processor, transforming and storing the data in a structured manner.
    6.1. New records will be inserted
    6.2. Existing records will be updated
    6.3. Logs the information of data received (a total for large amount of data, and more detailed logging if just a few records)
7. All tasks related to saving to the database should be handled within the consumer module to maintain data integrity and consistency and in one step.

## Events structure
- Events have an offset that represents a given change in time.
- Events contain a payload that carries the actual data related to the event.
- Events may also include metadata that provides additional context about the event, such as its source, timestamp, and type.
- For big structured types of data events are destructured into smaller events to facilitate easier processing and handling.
  - Usually the events have a hierarchical structure, where a parent ("Summary") event contains multiple related child events.

## Deleted data handling
- The consumers that need to track deletions should implement logic to handle deletion events appropriately.
- Deletion is usually tracked by the offset of the event that indicates the removal of the data.
- A Summary event has the current offset, all stored data that does not come in the same event should be considered deleted.

## The data document

The data document represents the structured format in which the processed event data is stored. It typically includes metadata about the event (offset)
Data stored in documents (like Workorder.cs) is structured to act as a raw data from AnglePlus events, preserving the original information. If further processing or data transformation is needed, it can be done later by sending a message to the handler and data is updated there.
```csharp
// event data representation in the Angle Plus Event
 public WorkorderClientInfo Client { get; set; }
 public class WorkorderClientInfo
{
    public int Id { get; set; }
    public string Code { get; set; }
    public string Description { get; set; }
    public WorkorderClientOfficeInfo ClientOffice { get; set; }
    public WorkorderQuoteInfo Quote { get; set; }
    public WorkorderCostingInfo Costing { get; set; }
    public WorkorderContactInfo ClientWorkContact { get; set; }
}
 // should be stored as WorkorderSummary.ClientInfo structured object
 // and not stored as WorkorderSummaryClientCode = Client.Code
```

## Auditing
Even when there are no changes the auditing fields for the document should still be updated to reflect the last modified date both for document auditing or AngelAudit info.

## Compatibility
When adding properties that are new, ensure they are backward compatible with existing data and do not break the processing of older events.
Usual fix is to provide the `[BsonIgnoreIfNull]` attribute for the new properties.
Unless data needs to be manipulated we do not create migrations to fix the data, rather resubscribe AnglePlus to receive a synching batch of events to add the new data.
Processing of data should however take into account the backward compatibility and ensure that older events are still processed correctly without causing errors or data inconsistencies.

### Notes
If further information is needed check [EventSource documentation](../../../Wiki/Architecture/Eventsourcing/Eventsourcing-Overview.md).
