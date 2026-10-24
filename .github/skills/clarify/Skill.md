---
name: clarify
description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions "clarify".
---

# Clarify - Interviewing for Shared Understanding
Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree and implementation task list, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time.

Don't take the acceptance criteria or requirements at face value. Instead, interrogate them for edge cases, ambiguities, and contradictions. If you find any, surface them and ask how to resolve them.

If a question can be answered by exploring the codebase, explore the codebase instead.

**Sharpen fuzzy language**
When the user uses vague or overloaded terms, propose a precise canonical term. "You're saying 'code' — do you mean the Code or the Name? Those are different things."

**Cross-reference with code**
When the user states how something works, check whether the code agrees. If you find a contradiction, surface it.

## After
At the end of the interview, update the plan accordingly, and provide a summary of the changes made, in a section titled "Plan Update Summary".
