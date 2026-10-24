---
name: ui-unit-test
description: "Generate unit tests for a given class. Use when: creating unit tests for a class of type vue or ts, ensuring code coverage, or validating business logic. Produces: UnitTestClass with test methods for each public method in the target class.
argument-hint: "Create unit tests for <ClassName>"
---

- Unit tests using vitest framework
- Create unit tests for every public method on the class.
- Focus on business rules and edge cases. Use the AAA (Arrange, Act, Assert) pattern for structuring your tests. Ensure that each test is independent and does not rely on the state of other tests. DO NOT comment AAA sections in the test methods.
- Group tests logically by method or feature, and use descriptive names for test methods to clearly indicate what is being tested.
- Use a single parameterized tests where applicable.
- File path for new files should be the same relative as the class being tested, but starting with a _<FileName>.spec.ts extension, stored in "\src\_tests"
- Lint the file after generating the tests to ensure code quality and consistency with the project's coding standards.
```
Set-Location UI; npm exec eslint <path to file>
``
- Focus on uncovered code paths, edge cases, and potential error conditions. Avoid generating tests for trivial getters/setters or properties unless they contain logic.


MANDATORY:
- Do not change code outside the tests classes.
- DO not run the tests, just generate them (user is responsible for running the tests).
- DO not output any summary of what was done.
