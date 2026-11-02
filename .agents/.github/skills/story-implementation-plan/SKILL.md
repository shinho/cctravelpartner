---
name: story-implementation-plan
description: Create a code review based on the user story acceptance criteria and code changes.
disable-model-invocation: true
---
Before starting:
1. **Ask the user** if the acceptance criteria `.md` file for the user story is present under `devOps/stories/` (e.g., `devOps/stories/<story-id>.md`). If not, request it first.

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

Create a list of tasks to implement the user story based on the acceptance criteria and the code changes. 
All item list must start with [ ] - as unchecked task list in markdown format.
Also mark subtasks with indentation and a dash (-) to indicate they are part of the main task and add a checkbox to each subtask as well.
Detail and number every step in sequence, including any code suggestions that are relevant to the implementation. 
Be strict to what is required and nothing else.
Ignore items marked for other stories, or marked as TBD or referencing other stories.
Create the plan in markdown format in a new file named `<storynumber>_plan_.md` under `devOps/stories/<storynumber>/`.
All code snippets should be in markdown format and properly formatted for the relevant language (e.g., C#, TypeScript) and in a separate file named `<storynumber>_code_suggestions.md` under the same directory.
The plan should oly contain tasks that need to be done in order to implement the story, nothing else, so I can revise and mark them complete as I go through the implementation.

If if are unsure of something ask the user for clarification before proceeding.
Do not proceed with the plan until you have all the necessary information and files to create a complete implementation plan.
Don't make the user do something unecessary if you have doubts, always ask for clarification first, don't make assumptions.
