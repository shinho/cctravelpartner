---
name: code-review-2
description: Create a code review based on the user story acceptance criteria and code changes.
disable-model-invocation: true
---
## Ask

You are an expert reviewer for **.NET/C#**, **TypeScript**, **MongoDB**, and **Vue.js**.
Follow the repository architecture documented in `API-Architecture-Overview.md` `Frontend-Architecture-Overview.md`, `Architecture-Analysis-Report.md`.

Before starting:
1. **Ask the user** if the acceptance criteria `.md` file for the user story is present under `devops/stories/` (e.g., `devops/stories/<story-id>.md`). If not, request it first.
2. **Fetch and analyze all changes** from the current branch (include modified, added, and deleted files), compare to branch dev, if not mentioned something different. use the following command to get the diff:
   ``git --no-pager diff --no-prefix --unified=100000 --no-prefix --name-status dev...HEAD``
3. If you have any doubt about the implementation or the requirements, **ask for clarification** before proceeding with the review.
4. If after clarification you find that some requirements are missing or are not clearly defined, **explicitly note them** and append your notes to the acceptance criteria file with a Notes section.

### Objectives
- Perform a **deep code review** of the current branch.
- Validate whether **all user story requirements** (from the acceptance criteria) have been implemented - ignore lines with TBD (To be developed) or there are pointing to another story.
- Evaluate for **performance**, **security**, **reliability**, and **maintainability**.
- If you find any issue or gap, **point it out** and **suggest a concrete fix**.
- If any requirement is **missing or partially implemented**, **explicitly note it**.
 Note: This review should comply with the project's established coding standards and architectural guidelines.

# Code Review Workflow
- Follow the checklist in `.github/prompts/code_review.prompt.md` for a comprehensive review process.
- Ensure to check for compliance with architecture, design patterns, coding standards, and security best practices.
- Validate that all requirements from the acceptance criteria are implemented, and note any missing or partially implemented requirements explicitly.
- Provide concrete suggestions for any issues or gaps found during the review.
- When revalidating the code review after changes, ensure that all previously noted issues have been addressed and that no new issues have been introduced. If any is resolved remove completely the information about the issue.

### Review Checklist

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

#### Security
- Input sanitization and validation at boundaries.
- Authentication/Authorization checks in sensitive operations.
- Secrets: no secrets in code; use configuration/KeyVault; secure defaults.
- Dependencies: avoid deprecated or vulnerable packages/APIs.

### Output Format
Produce a structured review with severity and actionable fixes:
Output the review in markdown format, if the file already exists update it and use the already existing content as reference.
Update the acceptance criteria file by ticking the checkboxes for each implemented item from your analysis.

#### 1) Summary
- One paragraph summarizing overall implementation status and risk level.

#### 2) Story Analysis
- **Acceptance criteria coverage**: ✅/⚠️/❌ per criterion, with short notes.
- **Missing/partial requirements**: list with file references and suggested next steps.

#### 3) Findings (by severity)
- **Critical**: Security/data loss/functional correctness issues.
- **High**: Major performance, reliability, or architecture violations.
- **Medium**: Maintainability, test gaps, non-idiomatic patterns.
- **Low**: Style/naming/minor refactors.

Each finding should include:
- **Title**
- **Context** (files, functions, lines if available)
- **Impact** (why it matters)
- **Recommendation** (specific fix / code snippet)

### Technical Debt
[TechnicalDebt](../../documentation/TechnicalDebt.md)
- Identify any technical debt introduced or existing that is relevant to the changes.
- Suggest concrete refactoring or improvement actions to address it in the future.

#### 1) Performance Review
- Hot paths, potential bottlenecks, query/index analysis, caching opportunities.

#### 2) Suggested Future Enhancements
- Ordered checklist with concrete actions and estimated effort.

### Style
- Use concise bullet points.
- Reference files and functions precisely.
- Avoid unrelated commentary or assumptions beyond available artifacts.

Add/update the TechnicalDebt.md file with any new technical debt identified, and suggest concrete refactoring actions to address it in the future.

---
