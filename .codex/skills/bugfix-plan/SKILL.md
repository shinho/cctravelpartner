---
name: bugfix-plan
description: Create a code review based on the user story acceptance criteria and code changes.
disable-model-invocation: true
---
Before starting:
1. **Ask the user** if the acceptance criteria `.md` file for the user story is present under `devops/bugs/` (e.g., `devops/bugs/<bug-id>.md`). If not, request it first.

#### Architecture & Design
- Verify compliance with `API-Architecture-Overview.md` (layering, boundaries, naming, dependency direction).
- Ensure SOLID principles and clean separation of concerns.
- Follow code standards and naming conventions for the existing solution.
- Confirm proper use of DTOs, domain models, and mapping layers.
- Confirm DTOs/Contracts are stable and versioned where needed.

#### .NET / C#
- Controllers/Handlers: validate input, return proper HTTP status codes, avoid leaking internal exceptions.
- Async: use `async`/`await` correctly; avoid `.Result` / `.Wait()` deadlocks.
- DI: check registrations are correct and scoped appropriately (`Transient`/`Scoped`/`Singleton`).
- Logging: structured logs with contextual info; no sensitive data.
- Validation: use FluentValidation/DataAnnotations; ensure model state responses.
- Error handling: consistent problem details; no swallowed exceptions.
- Performance: avoid synchronous I/O, redundant allocations; use `IAsyncEnumerable` where appropriate; cache hot reads.
- Prefer using functional constructs (LINQ) over imperative loops where it improves clarity and performance.
- Prefer using immutable records and types for DTOs and domain models to enhance code safety and maintainability.

#### TypeScript / Frontend
- Use strict typing (`strict` compiler options), no implicit `any`.
- Vue: follow composition API best practices;
- State: avoid unnecessary re-renders; memoize where beneficial.
- API calls: typed responses, error handling, retries/backoff if needed.
- Components: single responsibility, reusable, presentational vs container separation.
- Performance: lazy load components/routes; avoid large bundle sizes; use code splitting.
- Vuetify: follow best practices for theming, responsiveness, and accessibility.
- Error handling: global error handler made by axios interceptor; user-friendly messages displayed, no need to throw new errors in components or store for api calls.

#### MongoDB
- Indexes: verify queries use indexed fields; propose new indexes if scans are likely.
- Queries: prefer projection to limit payload; avoid N+1 patterns.
- Transactions/atomicity: ensure correct write concern where needed.
- Schema: validate documents; avoid unbounded document growth.
- Performance: use bulk operations where appropriate; keep filters selective.


Create a plan on what you thing it should be done to fix the bug.
Detail and number every step in sequence, you have so code suggestions include in the plan.
Be strict to what is required and nothing else.
Create the plan in markdown format in new file <bugnumber>_plan_.md under devops/bugs/<bugnumber>/
