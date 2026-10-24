public class PersonRoot : StaticDataDocDbAggregateRoot
    {
        public static string ToId(int personId) => ToId<PersonRoot>(personId);
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
        protected PersonRoot()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
        { }
        public PersonRoot(ulong offset, PlusApi.Person.Person person)
        : base(nameof(PersonRoot), ToId(person.Id), person.Id)
        {
            Person = new Person(person);
            AngleTimeStamp = new AuditableDates
            {
                Created = person.CreatedDate
            };
            Audit = new AuditableDates
            {
                Created = DateTime.UtcNow
            };
            UpdateFrom(offset, person);
        }
        public AuditableDates Audit { get; set; }
        [Required]
        public Person Person { get; set; }
        public void UpdateFrom(ulong offset, PlusApi.Person.Person person)
        {
            if (Offset > offset) return;
            Offset = offset;
            Audit.Modified = DateTime.UtcNow;
            Person.UpdateFrom(person);
        }
}

