namespace carnation_backend.DAOs
{
    public class TransactionRequestDAO
    {
        public Guid Aid { get; set; }
        public decimal Amount { get; set; }
        public string Type { get; set; }
    }

}
