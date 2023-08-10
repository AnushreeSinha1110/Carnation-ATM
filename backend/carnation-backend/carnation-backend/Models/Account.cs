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

        public Guid Id { get; set; }
        public AccountType AType { get; set; }
        public string AccountNumber { get; set; }

        public Decimal Balance { get; set; }

        public Customer AccountOwner { get; set; }

        
    }
}
