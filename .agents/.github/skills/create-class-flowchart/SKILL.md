---
name: create-class-flowchart
description: Create a component flowchart using Mermaid syntax.
disable-model-invocation: true
---
Your goal is to generate/update a flowchart for the class using Mermaid syntax.

- Create a mermaid-chart of type flowchart TD that shows the flow of this class
- Ignore sub component as they will be treated separately,
- if the mmd file already exists update it.
- Confirm it's created in the proper location, if not, move it.
- Use colors as per instructions and use the snippets file and mermaid-styles.md for reference.

Mermaid diagrams (mmd files)
--
Use for complex logic explanations. Keep simple. Use `flowchart TD` (flowchart top down) unless better suited otherwise.

- **Always start new diagrams by copying the template from `/documentation/mermaid-style-snippet.mmd`** which includes proper theme config, class definitions, and subgraph templates.
- Always create mermaid files under `/documentation` folder with a relative path mirroring the component location.
- Use subgraphs for complex components or logic.
- Always save it with `.mmd` extension.
- Focus on input/output, logic and data flow; ignore internal dll's logic and third party packages.
- Path structure: mirror the documented file's path relative to project root, e.g., `Class.cs` at `src/project/Class.cs` → `/documentation/src/project/__Class.mmd`.
- Naming convention: use the same name as the documented file, prefixed with double underscores, e.g., `__Class.cs` for `Class.cs`.
- Always add a label at the top of the diagram indicating what it documents, the component/file/class name.
- Overall architecture or cross-cutting diagrams go directly in `/documentation` root.
- Group function steps logically, using subgraphs where appropriate. **All method/function logic must be placed inside a subgraph** labeled with the method name.
- For Vue components, include a subgraph documenting component props with their types and default values (use dataNode class). **Props subgraph must come immediately after the Start node** to show they're available to all component logic. **Use LR direction for horizontal layout.**
- Put APIs in a separate subgraph with LR direction to highlight external interactions using the provided template (bg color #98d8c8).
- Always highlight dependencies in a separate subgraph with LR direction using the provided template.
- Use the predefined class definitions from the snippet: startNode, endNode, decisionNode, processNode, dataNode, storeNode, apiNode, dependencyNode, errorNode.
- if the component has commented documentation, extract key points and include them in the diagram as data nodes or annotations.
- For composables create an initialize group with internal setup and private methods. For each function create a subgraph with its logic. Wrap the return values in a separate subgraph at the end. see #composable-base.mmd for an example.
- Always review and refine diagrams for clarity and accuracy before finalizing.
