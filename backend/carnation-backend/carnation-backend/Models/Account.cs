namespace carnation_backend.Models
{
    public enum AccountType
    {
        Savings,
        Current,
        Loan
    }
    public class Account
    {
        public Account()
        {
            Id = Guid.NewGuid();
            AccountNumber = Guid.NewGuid().ToString();
            Balance = 0;

        }
        public Account(AccountType atype, Customer owner) : this()
        {
            AType = atype;
            AccountOwner = owner;
        }

        public Guid Id { get; set; }
        public AccountType AType { get; set; }
        public string AccountNumber { get; set; }

        public Decimal Balance { get; set; }

        public Customer AccountOwner { get; set; }

        
    }
}
