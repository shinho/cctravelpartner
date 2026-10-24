---
name: document-root
description: "Use when: creating, updating, or reviewing event processors for AnglePlus entities across the ResultEntry consumer pipelines; scaffolding a new entity data type for MongoDb persistence; defining the document root structure for a new or existing AnglePlus entity; mapping AnglePlus entities to ResultEntry document roots"
---

# Document Root Design for AnglePlus Event Processors
The document root is the top-level structure persisted by event processors in ResultEntry.
It defines how AnglePlus entities are represented in MongoDB, including the core data, audit fields, and any entity-specific extras.
DocumentRoot is the base class for all persisted documents created by event processors, and it enforces a consistent structure and audit pattern across different entity types.

# Create Document Root
When you need to create a new document root for an AnglePlus entity, follow these steps:
1. Identify the AnglePlus API model you want to create a document root for (e.g., AuthorisedResult, Workorder, etc.).
2. Create a new C# class in the appropriate folder under `ResultEntry.DAL.Collections`, following the structure of existing document roots. Use the template provided in the documentation for reference.
3. Implement the class according to the structure outlined in [DocumentRoot](./references/DocumentRoot.md).

# Mapping Rule (Shadow Copy)
When designing or updating a document root and its nested data entity:

- Treat the ResultEntry entity as a persisted shadow copy of the source AnglePlus contract.
- Map all relevant fields from the source event DTO to the persisted entity in `UpdateFrom(...)`.
- Ensure constructor population also relies on `UpdateFrom(...)` so initial creation and later updates use the same mapping path.
- Ensure `Audit` and `Offset` are always updated in every mutation path, not only in constructors.
- For dependent event methods (for example translations), accept `offset` and apply idempotency guard (`if (Offset > offset) return`) before mutating data.
- When a dependent event changes the root, set `Offset = offset` and `Audit.Modified = DateTime.UtcNow` in that method.
- Do not leave newly added source fields unmapped when they belong to the same entity boundary.
- Example: if `PlusApiStaticData.Compound` exposes `CasNumber`, `FirstSynonym`, `RtfDescription`, and `LimsCompId`, the persisted `Compound` entity must expose and map those fields.
- Events can be found decompiling the AnglePlusApi assembly or browsing the API reference documentation on `documentation/PlusReferences/Events`. If you are missing a source field that you think should be mapped, check the latest API contract for that entity.

