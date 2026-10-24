# Unit Testing Anti-Patterns

## Table of Contents
1. [Overusing Test Doubles](#1-overusing-test-doubles)
2. [Testing Implementation Details](#2-testing-implementation-details)
3. [Poor Test Names](#3-poor-test-names)
4. [Multiple Acts in One Test](#4-multiple-acts-in-one-test)
5. [Shared Mutable State in Fixtures](#5-shared-mutable-state-in-fixtures)
6. [Getters Added Only for Tests](#6-getters-added-only-for-tests)
7. [Trivial Tests](#7-trivial-tests)
8. [Fragile Test Double Verification](#8-fragile-test-double-verification)

---

## 1. Overusing Test Doubles

**❌ Bad — every dependency configured and verified:**
```csharp
[Fact]
public void Sends_AllNotifications()
{
    var repository = Substitute.For<IMessageRepository>();
    repository.GetAll().Returns(new[] { msg1, msg2 });
    var mailer = Substitute.For<IMailer>();
    var sut = new NotificationService(mailer, repository);
    sut.Send();
    mailer.Received(1).Send(msg1);
    mailer.Received(1).Send(msg2);
}
```

**✅ Good — fake + spy or outcome-focused assertion:**
```csharp
[Fact]
public void Sends_AllNotifications()
{
    var repository = new InMemoryMessageRepository();
    repository.Save(msg1); repository.Save(msg2);
    var mailer = new SpyMailer();
    var sut = new NotificationService(mailer, repository);
    sut.Send();
    mailer.SentMessages.Should().BeEquivalentTo(new[] { msg1, msg2 });
}
```

In this repository, use AutoFixture with `AutoNSubstituteCustomization` for dependency
graphs and `TestableMessageHandlerContext` for handler messages. Use `Received` only when
the interaction itself is the observable behavior; otherwise assert the emitted message,
stored document, returned value, or exception.

---

## 2. Testing Implementation Details

**❌ Bad — inspecting internals via reflection:**
```csharp
[Fact]
public void Hashing_SetsInternalSalt()
{
    var sut = new PasswordHasher();
    sut.Hash("password123");
    var salt = typeof(PasswordHasher)
        .GetField("_salt", BindingFlags.NonPublic | BindingFlags.Instance)!
        .GetValue(sut);
    salt.Should().NotBeNull(); // internal detail!
}
```

**✅ Good — test observable behavior:**
```csharp
[Fact]
public void Hashing_SamePassword_Twice_ProducesDifferentHashes()
{
    var sut = new PasswordHasher();
    var hash1 = sut.Hash("password123");
    var hash2 = sut.Hash("password123");
    hash1.Should().NotBe(hash2);
}
```

---

## 3. Poor Test Names

**❌ Bad:**
```
Test()
TestDeactivateSubscription()
ItThrowsWhenPasswordTooShort()
DeactivateSubscription_ShouldSetStatusToInactive()
```

**✅ Good — use the repository's descriptive convention:**
```
Map_WhenCommentsAreNull_ShouldReturnNullBatchComments()
ProcessEvents_WithOneNewClientEvent_ShouldAdd()
HandleClientUpdatedMessage_WithInvalidClient_ShouldThrowArgumentException()
```

Rules for new tests: start with the public method or workflow, describe the relevant
condition with `When`, `With`, or `Without`, and end with the observable outcome. The local
suite uses `_Should_` frequently, so `Should` is valid in a test name. Do not rename older
tests solely to standardize their names.

---

## 4. Multiple Acts in One Test

**❌ Bad:**
```csharp
[Fact]
public void Managing_SubscriptionLifecycle()
{
    var sub = new Subscription(SubscriptionStatus.Active);
    sub.Deactivate();
    sub.Status.Should().Be(SubscriptionStatus.Inactive); // act+assert 1
    sub.Reactivate();
    sub.Status.Should().Be(SubscriptionStatus.Active);   // act+assert 2
}
```

**✅ Good — one behavior per test:**
```csharp
[Fact]
public void Deactivating_AnActiveSubscription_SetsStatusToInactive() { ... }

[Fact]
public void Reactivating_AnInactiveSubscription_SetsStatusToActive() { ... }
```

---

## 5. Shared Mutable State in Fixtures

**❌ Bad — shared state causes test order dependency:**
```csharp
public class OrderTests
{
    private readonly InMemoryOrderRepository _repository = new(); // shared!

    [Fact]
    public void FirstTest() { _repository.Save(order1); /* ... */ }

    [Fact]
    public void SecondTest() { /* _repository may already have order1 */ }
}
```

**✅ Good — fresh state per test:**
```csharp
[Fact]
public void FirstTest()
{
    var repository = new InMemoryOrderRepository(); // fresh
    repository.Save(order1);
    // ...
}
```

---

## 6. Getters Added Only for Tests

**❌ Bad — exposing internal state only for tests:**
```csharp
public class Subscription
{
    private DateTime _renewalDate;
    public DateTime RenewalDate => _renewalDate; // only for tests!
    public void Renew() { _renewalDate = DateTime.UtcNow.AddMonths(1); }
}
```

**✅ Good — verify through domain behavior:**
```csharp
[Fact]
public void Renewing_ASubscription_AllowsAccessForAnotherMonth()
{
    var sut = new Subscription(SubscriptionStatus.Active, new FixedClock(jan1));
    sut.Renew();
    sut.IsActiveAt(jan31).Should().BeTrue();
    sut.IsActiveAt(feb2).Should().BeFalse();
}
```

---

## 7. Trivial Tests

**❌ Skip — no logic:**
```csharp
[Fact]
public void Customer_Name_IsSet()
{
    var customer = new Customer { Name = "Alice" };
    customer.Name.Should().Be("Alice"); // tests the language, not your code
}
```

**✅ Test — has real logic:**
```csharp
[Fact]
public void Discount_ForPremiumCustomer_IsTwentyPercent()
{
    var sut = new DiscountCalculator();
    var result = sut.Calculate(CustomerTier.Premium, 100m);
    result.Should().Be(20m);
}
```

---

## 8. Fragile Test Double Verification

**❌ Bad — coupled to internal call sequence:**
```csharp
validator.Received(1).Validate(Arg.Any<Order>());
persister.Received(1).Save(Arg.Any<Order>());
// Breaks if you inline the validator — even if behavior is unchanged
```

**✅ Good — verify the outcome:**
```csharp
var repository = new InMemoryOrderRepository();
sut.Process(OrderMother.Valid());
repository.Count.Should().Be(1);
```
