---
name: unit-testing
description: "Write, review, and improve unit tests using best practices. Use when writing new unit tests for C#, reviewing existing tests for quality, refactoring fragile or brittle tests, choosing between mocks/stubs/fakes/spies, naming tests, structuring test files, identifying anti-patterns, generating test doubles, or applying patterns. Also triggers on phrases like generate tests for this code, write a test for, add tests to, test coverage, unit test this, improve my tests"
---

# Unit Testing Skill

Apply these principles with the conventions of the target project. For this repository,
the concrete examples in `UnitTests/` are the primary source of truth.

## Repository Conventions

The `UnitTests` project currently uses:

- xUnit (`[Fact]`, `[Theory]`, and `[InlineData]`) on .NET 10
- AutoFixture with `AutoFixture.AutoNSubstitute` for generated objects and dependencies
- NSubstitute for stubs and interaction assertions (`Arg.Any`, `Returns`, `Received`)
- FluentAssertions for readable object/value assertions in newer mapper and feature tests
- xUnit `Assert` for many handler, consumer, and helper tests
- `TestableMessageHandlerContext` and related test bases for NServiceBus handlers
- `TestStack.BDDfy` only where a test inherits from `BddTest`

Do not introduce another test framework or mocking library when extending this project.
Follow the local assertion style in the feature being changed. Prefer a small test-local
helper such as `BuildMinimalWorkorder`, `BuildComment`, or `CreateSyncedSampleTask`
before adding a shared Object Mother or Builder.

## Core Principles

1. **Test behavior, not implementation** — tests should survive internal refactoring
2. **One behavior per test** — not one method per test
3. **AAA structure** — Arrange / Act / Assert, always
4. **Use the simplest suitable test double** — prefer a fake or spy for infrastructure,
   but use the repository's AutoFixture/NSubstitute setup for dependency-heavy handlers
5. **Name tests so the scenario and outcome are obvious** — match the local convention

## Workflow

### Writing New Tests

1. Identify the **unit of behavior** (a business scenario, not a method)
2. Pick `[Fact]` for one scenario or `[Theory]` with `[InlineData]` for a compact input matrix
3. Arrange with AutoFixture when the object graph is incidental; customize only values that
	matter to the scenario
4. For complex domain data, use a focused private builder/helper in the test class. Reuse
	an existing shared fixture base when the feature already uses one
5. Act once through the public API, including one awaited call for async behavior
6. Assert observable results, state changes, emitted messages, persisted records, or
	exceptions. Avoid reflection and assertions on incidental calls

### Reviewing Existing Tests

Check for these anti-patterns (see `references/anti-patterns.md`):
- Tests that verify call counts or exact interaction sequences without asserting the outcome
- Test data created by AutoFixture whose relevant values are not explicitly controlled
- Multiple Act phases in one test
- Getters added only for testing
- Shared mutable state between tests
- Empty test constructors and dead fixture setup

The existing suite contains some older names such as `HexColorValueTests` and many names
using `_Should_`. Do not rename unrelated tests just to enforce a naming rule. New tests
should use the established descriptive form:

`Method_WhenCondition_ShouldOutcome`

Examples from this repository include `Map_WhenBatchCommentHasWorkOrderLevelCode_ShouldIncludeInBatch`
and `ProcessEvents_WithoutEvents_ShouldNotAddOrUpdateAnything`.

### Choosing Test Doubles

| Double | Use when |
|--------|----------|
| Fake | Replacing infrastructure with a small working implementation |
| Stub | Controlling return values; in this repository commonly an NSubstitute configured with `Returns` |
| Spy | Recording messages, saved documents, or other effects for outcome assertions |
| Mock | Use NSubstitute only when a fake/spy would be disproportionate or the interaction is the behavior |
| Dummy | Satisfying required params that are never used |

**Repository default:** Freeze dependencies through AutoFixture when appropriate:

```csharp
_clientDbCollection = Fixture.Freeze<IClientDbCollection>();
_clientDbCollection
    .Where(Arg.Any<Expression<Func<Client, bool>>>(), Arg.Any<CancellationToken>())
    .ReturnsForAnyArgs(clients);
```

Use `Received` only for a meaningful externally visible side effect. For handlers, prefer
asserting the messages in `TestableMessageHandlerContext` and the resulting persisted or
API-facing state over verifying every dependency call.

### Test Naming

Pattern used by new tests: `Method_WhenCondition_ShouldOutcome`

```
✅ Map_WhenCommentsAreNull_ShouldReturnNullBatchComments
✅ ProcessEvents_WithOneNewClientEvent_ShouldAdd
✅ HandleClientUpdatedMessage_WithInvalidClient_ShouldThrowArgumentException

❌ TestDeactivateSubscription
❌ ShouldThrowWhenPasswordTooShort
❌ DeactivateSubscription_SetsStatusToInactive
```

Rules:
- Start with the public method or workflow under test
- Describe the relevant condition with `When`, `With`, or `Without`
- End with the observable outcome, commonly using `Should`
- Use underscores to separate readable clauses
- Use `sut` when there is one obvious system under test; existing handler tests may use a
  descriptive field because the fixture is constructed in the test class constructor

## Key Patterns

### AAA Pattern
```
// Arrange — set up only scenario-relevant values and dependencies
// Act — single public call on the SUT
// Assert — verify the observable outcome
```
Keep the phases visually clear. Comments are optional when the code is already obvious.
Never use multiple Act-Assert cycles to cover separate behaviors; split those into tests.

### Test Data
Prefer existing fixture bases and small scenario helpers. Use an Object Mother when the same
named business state appears across several test classes; use a Builder when many optional
values must vary. See `references/patterns.md` before introducing either abstraction.

### Builder Pattern
Fluent builder for complex test objects with many optional fields.
See `references/patterns.md` for full examples.

### Assert Object / Custom Assertions
Encapsulate complex repeated assertions only when they clarify a domain-level expectation.
See `references/patterns.md` for full examples.

### Humble Object
When a class mixes logic with infrastructure (I/O, UI, HTTP), extract the logic into a pure testable class. The "humble object" is the thin infrastructure wrapper.

### Functional Architecture
Separate pure logic (unit tested) from side effects (integration tested).
Pure functions → unit tests. Orchestration → integration tests.

## What NOT to Test

- Simple properties / DTOs with no logic
- Constant-returning methods
- Code where the test description is "calls method and returns what I set"
- Private methods directly — test through public behavior

## Local Checklist

Before submitting a test change:

- The test is under the relevant `UnitTests/Features/<Feature>` area and matches the namespace of the file being tested
- The test uses `[Fact]` or `[Theory]` consistently with neighboring tests
- AutoFixture-generated values that affect the branch are explicitly set
- Async methods are awaited and exception tests use `Assert.ThrowsAsync` or the local
  FluentAssertions equivalent
- Assertions cover the result or side effect, not only that a dependency was called
- The test is isolated and does not depend on constructor-time mutable state from another test

## Reference Files

The reference files below provide general patterns and examples. Adapt them to the
repository conventions above; they are not a reason to introduce a new framework or to
rewrite established tests.

- `references/patterns.md` — Object Mother, Builder, Assert Object examples (multi-language)
- `references/anti-patterns.md` — Common mistakes with before/after examples
- `references/test-doubles.md` — Fake, Stub, Spy, Mock examples (multi-language)
