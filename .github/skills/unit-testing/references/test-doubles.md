# Test Doubles Reference

## Fake

A working but simplified implementation. Replaces real infrastructure.

**C#:**
```csharp
public class InMemoryOrderRepository : IOrderRepository
{
    private readonly Dictionary<Guid, Order> _store = new();
    public void Save(Order order) => _store[order.Id] = order;
    public Order Get(Guid id) => _store[id];
    public int Count => _store.Count;
}
```

---

## Stub

Returns predefined values to control SUT behavior.

**C# (custom):**
```csharp
public class AlwaysUniqueEmailStub : IUniqueEmailSpecification
{
    public bool IsUnique(string email) => true;
}
```

**C# (NSubstitute, used by this repository):**
```csharp
var stub = Substitute.For<IUniqueEmailSpecification>();
stub.IsUnique(Arg.Any<string>()).Returns(true);
```

---

## Spy

Records interactions for assertion after the Act phase.

**C#:**
```csharp
public class SpyMailer : IMailer
{
    public List<Message> SentMessages { get; } = new();
    public void Send(Message message) => SentMessages.Add(message);
    public int SentCount => SentMessages.Count;
    public bool WasSentTo(string email) => SentMessages.Any(m => m.To == email);
}
```

---

## Mock

Pre-configured to verify specific interactions. Use sparingly — prefer Spy.

**C# (NSubstitute, use only when the interaction is the behavior):**
```csharp
var mock = Substitute.For<IMailer>();
// ... act ...
mock.Received(1).Send(Arg.Is<Message>(msg => msg.To == "user@example.com"));
```

Prefer a handwritten spy or an outcome assertion when the test can inspect emitted
messages, persisted documents, or the result directly. In this repository, configure
dependency graphs with AutoFixture and `AutoNSubstituteCustomization` where appropriate.

---

## Dummy

Satisfies a required parameter that is never used in the test.

**C#:**
```csharp
public class DummyMailer : IMailer
{
    public void Send(Message message) { /* intentionally empty */ }
}
```

