---
name: service-descriptor
description: "Generate user-friendly service/module descriptions. Use when: documenting a service/module, feeding descriptions into a RAG system, onboarding, building a service catalog, creating Responsibilities, or producing a technical summary of a service or project. Produces: UserDescription, Responsibilities, TechnicalSummary, and an optional Mermaid flowchart. Saves output as a markdown file next to the project."
argument-hint: "Create a document describing <ServiceName>"
---

# Service Descriptor

Analyzes an AnglePlus service from repository source code and produces structured, human-readable documentation suitable for RAG ingestion, onboarding, and service catalogs.

## When to Use
- Feeding service descriptions into a RAG (Retrieval-Augmented Generation) system.
- Documenting services for onboarding, architecture diagrams, or service catalogs.
- Producing a non-technical overview that complements existing technical documentation.
- Generating Responsibilities for stakeholder communication.

## Inputs
- **Service name or path** — provided as the slash-command argument or asked on invocation.
- If no output file path is given, save output as `<ServiceName>_SERVICE_DESCRIPTION.md` in the same directory as the service's `.csproj`.

## Procedure

### Step 1 — Identify the target service
1. Resolve the service name/path from the argument or prompt the user: *"Which service should I describe? (provide name or path)"*
2. Locate the `.csproj` file for the service using file search. Record its directory as `$serviceRoot`.

### Step 2 — Gather source evidence
Collect the following (in order of priority). Stop scanning once sufficient context is available.

| Priority | What to read |
|----------|-------------|
| 1st | `Program.cs`, `Startup.cs` — entry points, DI registrations, middleware |
| 2nd | Controller / handler files (`*Controller.cs`, `*Handler.cs`, `*Consumer.cs`) |
| 3rd | Public API interfaces (`I*.cs`) and domain model files |
| 4th | `.csproj` — NuGet dependencies, target framework |
| 5th | `appsettings.json` (redact secrets) — infrastructure bindings |
| Last | Solution-level README if present |

**AVOID**: `packages/`, `bin/`, `obj/`, `*.config` (web.config, app.config), `.env`, Service Fabric parameter files (`ApplicationParameters.xml`).

> If CosmosDB references are found in code or config, describe it as **MongoDB** (legacy naming convention in this repository).

### Step 3 — Ask targeted follow-ups (if needed)
Only ask when repository evidence is ambiguous or missing:
- Business domain / purpose (if not clear from code).
- Key consumers / integrators of this service.
- Ownership / team name (if not in any README).

### Step 4 — Produce the three required deliverables

#### `UserDescription` — 1 paragraph, user-friendly
Plain language. No jargon. Suitable for non-technical stakeholders.

#### `Responsibilities` — exactly 3 sentences
1. What the service does.
2. Who or what depends on it.
3. Why it matters.

#### `TechnicalSummary` — bulleted list
Include:
- **Runtime**: framework and language (e.g., .NET 8, C#)
- **Responsibilities**: primary functions (max 5 bullets)
- **Key dependencies**: NuGet packages / internal services consumed
- **Inbound APIs / triggers**: HTTP endpoints, message queues, event hubs
- **Outbound integrations**: databases, queues, downstream services
- **Deployment**: hosting model if determinable (e.g., containerized, Service Fabric)

#### `Flowchart` — optional Mermaid diagram
Produce only when inbound/outbound interactions are clearly identifiable from source code. Use `flowchart LR` orientation. Example:

:::mermaid
flowchart LR
    Client -->|HTTP POST| ServiceName
    ServiceName -->|publish| EventHub
    ServiceName -->|write| MongoDB
:::

#### `TechnicalDebt` — bulleted list
Include any known limitations, missing features, or deferred work that is evident from the source code or documentation.
Make a brief analysis of the codebase and note any areas that may require attention.

### Step 5 — Write the output file
Combine all deliverables into a markdown file and save it:

```
/Wiki/Modules/<ServiceName>_SERVICE_DESCRIPTION.md
```

File structure:
```markdown
# <ServiceName>

## User Description
<paragraph>

## Responsibilities
<3 sentences>

## Technical Summary
<bullets>

## Flowchart (optional)
<mermaid block> ** use azure markup for wiki flowcharts ":::"

## Technical Debt
<bullets>
```

## Safety Rules & Privacy
- **Never print** connection strings, API keys, tokens, passwords, or secrets. Redact with `[REDACTED]` and notify the user.
- Do not assert SLAs, ownership, or on-call responsibilities unless explicitly stated in repository files.
