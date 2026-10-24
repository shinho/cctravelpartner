# Unit Testing Patterns Reference

## Table of Contents
1. [Object Mother](#object-mother)
2. [Builder Pattern](#builder-pattern)
3. [Assert Object / Custom Assertions](#assert-object)
4. [Parameterized Tests](#parameterized-tests)

---

## Object Mother

Static factory for pre-configured, semantically named test objects. Eliminates duplication in Arrange phases.

**C# (generic pattern; prefer a local helper when it is used by one feature):**
```csharp
public static class SubscriptionMother
{
    public static Subscription New() => new(SubscriptionStatus.New);
    public static Subscription Active() => new(SubscriptionStatus.Active);
    public static Subscription Inactive() => new(SubscriptionStatus.Inactive);
    public static Subscription ActiveWithPlan(SubscriptionPlan plan) =>
        new(SubscriptionStatus.Active, plan);
}

// Usage
var sut = SubscriptionMother.Active();
```

For this repository, first look for an existing fixture base or focused helper in the
feature. Add a shared Object Mother only when the same business state is reused across
multiple test classes.


---

## Builder Pattern

Fluent builder for complex objects with many optional fields. More flexible than Object Mother when many combinations exist.

**C# (generic pattern; use when several optional values vary repeatedly):**
```csharp
public class OrderBuilder
{
    private CustomerId _customerId = CustomerId.New();
    private List<OrderItem> _items = new() { new OrderItem("Product", 10m, 1) };
    private string _currency = "USD";

    public OrderBuilder WithCustomer(CustomerId id) { _customerId = id; return this; }
    public OrderBuilder WithItems(params OrderItem[] items) { _items = items.ToList(); return this; }
    public OrderBuilder WithCurrency(string currency) { _currency = currency; return this; }
    public OrderBuilder WithNoItems() { _items = new(); return this; }

    public Order Build() => new(_customerId, _items, _currency);
}

// Usage
var order = new OrderBuilder()
    .WithCustomer(customerId)
    .WithItems(new OrderItem("Widget", 25m, 3))
    .Build();
```

The local `UnitTests` suite commonly uses private methods such as `BuildMinimalWorkorder`
and `BuildComment` instead of a shared fluent builder. Keep those helpers close to the
tests when they describe one feature's data.


---

## Assert Object

Encapsulate complex or repeated assertion logic into a reusable class. Improves readability and reduces duplication.

**C#:**
```csharp
public class OrderAssert
{
    private readonly Order _order;
    public OrderAssert(Order order) { _order = order; }

    public static OrderAssert For(Order order) => new(order);

    public OrderAssert HasStatus(OrderStatus expected)
    {
        _order.Status.Should().Be(expected);
        return this;
    }

    public OrderAssert HasItemCount(int expected)
    {
        _order.Items.Should().HaveCount(expected);
        return this;
    }

    public OrderAssert BelongsTo(CustomerId customerId)
    {
        _order.CustomerId.Should().Be(customerId);
        return this;
    }
}

// Usage
OrderAssert.For(order)
    .HasStatus(OrderStatus.Confirmed)
    .HasItemCount(2)
    .BelongsTo(customerId);
```
---

## Parameterized Tests

Test multiple input/output combinations without duplicating test code.

**C# (xUnit Theory):**
```csharp
[Theory]
[InlineData("password", false)]
[InlineData("pass", false)]
[InlineData("ValidPass1!", true)]
[InlineData("AnotherValid9#", true)]
public void Validate_WhenPasswordIsProvided_ShouldReturnExpectedResult(string password, bool expectedValid)
{
    var sut = new PasswordValidator();
    var result = sut.Validate(password);
    result.IsValid.Should().Be(expectedValid);
}
```
