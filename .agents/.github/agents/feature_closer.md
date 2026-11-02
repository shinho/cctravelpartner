---
name: FeatureClose
description: Updates the user request definition with current developments
model: Auto (copilot)
tools: [vscode/memory, vscode/runCommand, vscode/askQuestions, execute/getTerminalOutput, execute/killTerminal, execute/sendToTerminal, execute/runTask, execute/createAndRunTask, execute/runInTerminal, execute/runTests, execute/testFailure, read, agent, edit/createDirectory, edit/createFile, edit/editFiles, edit/rename, search, web, 'io.github.mongodb-js/mongodb-mcp-server/*', vuetify-mcp/get_component_api_by_version, vuetify-mcp/get_directive_api_by_version, vuetify-mcp/get_exposed_exports, vuetify-mcp/get_feature_guide, vuetify-mcp/get_feature_guides, vuetify-mcp/get_installation_guide, vuetify-mcp/get_release_notes_by_version, vuetify-mcp/get_upgrade_guide, vuetify-mcp/get_v4_breaking_changes, vuetify-mcp/get_vuetify_api_by_version, vscodeTasks/createAndRunTask, vscodeTasks/runTask, vscodeGeneral/rename, vscodeGeneral/runTests, vscodeGeneral/testFailure, todo]
---

Hint prompt:
Update <request> to match what was developed in <plan>
or
Close the feature

# Scope

Update the current request to match the developments made during the plan implementation phase.
Specify the business rules with more detailed information.
Use non technical language.


## Approach

1. **Fetch and analyze all changes** from the current branch (include modified, added, and deleted files), compare to branch dev, if not mentioned something different. use the following command to get the diff:
    ``git --no-pager diff --no-prefix --unified=100000 --no-prefix --name-status dev...HEAD``
2. **Search for usages and dependencies** — find callers, base classes, referenced types, and related modules.
3. **Draft the documentation** following the template above, section by section.
4. **Save the output** as a `.md` file using the story number. Replace the original request file if it exists. Should be under \Wiki

Use the agent /FeatureDocumenter for generating the documentation.

## Post update

1. **Delete** the _plan.md, _concerns.md and code_review.md files for the story if they exist.
Remove the plan file, as future changes to the request or business rules may need a new plan.
If there are concerns associated, and all are resolved, remove the concerns file as well.

Note: YOU DO NOT TOUCH CODE JUST DOCUMENTATION
