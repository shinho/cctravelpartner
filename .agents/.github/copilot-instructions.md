## ResultEntry C# — Copilot instructions
--
Further information on [Memory Instructions](./memory.instructions.md)

# Testing Workflow
- **vitest:ui running**: After creating new test files, don't run tests manually – vitest:ui will automatically pick them up in watch mode.
- Test files are auto-discovered and hot-reloaded in the UI dashboard.
- Always create test files under `src/_tests/` with a relative path mirroring the component location.
- Use the same name as the tested file, prefixed with an underscore, e.g., `Component.vue` → `_component.spec.ts`.

# Evaluate
- When a user asks to implement a feature, analyze the implications of the feature on the existing codebase and architecture. Consider how it fits with current design patterns, potential impacts on performance, security, and maintainability. If anything the user is asking for seems to conflict with established patterns or best practices, provide a detailed explanation of the potential issues and suggest alternative approaches that align better with the overall architecture and design principles of the project. Always aim to maintain consistency and quality in the codebase while implementing new features. If needed, ask for more information or clarification from the user to ensure a clear understanding of the requirements and constraints before proceeding with the implementation.

# Documentation
- Always use MongoDb instead of CosmosDb in documentation, even if CosmosDb is used in the actual terminology, as it was updated.

# Rules
- DO NEVER COMMIT ANYTHING unless the user asks you to. Always wait for explicit instructions before making any commits.
- STOP if required to access the file system or any external resource outside the scope of the project. Always ask the user for the necessary information or permissions before proceeding with any actions that require access to files or external resources.

# Constraints
If you need some temporary files or resources outside the project directory, always ask for explicit permission before creating or accessing them.
If you need a temporary folder for testing purposes, use \copilot-tmp within the project directory.

*Important*: "Comments are lies, just read the code"

## graphify

For any question about this repo's architecture, structure, components, or how to add/modify/find
code, your first action should be `graphify query "<question>"` when `graphify-out/graph.json`
exists. Use `graphify path "<A>" "<B>"` for relationship questions and `graphify explain "<concept>"`
for focused-concept questions. These return a scoped subgraph, usually much smaller than the full
report or raw grep output.

Triggers: "how do I…", "where is…", "what does … do", "add/modify a <component>",
"explain the architecture", or anything that depends on how files or classes relate.

If `graphify-out/wiki/index.md` exists, use it for broad navigation. Read `graphify-out/GRAPH_REPORT.md`
only for broad architecture review or when query/path/explain do not surface enough context. Only read
source files when (a) modifying/debugging specific code, (b) the graph lacks the needed detail, or
(c) the graph is missing or stale.

Type `/graphify` in Copilot Chat to build or update the graph.
