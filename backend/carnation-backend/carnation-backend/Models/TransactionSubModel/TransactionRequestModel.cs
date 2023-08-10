namespace carnation_backend.Models.TransactionSubModel
{
    public class TransactionRequestModel
    {
        public Guid Aid { get; set; }
        public decimal Amount { get; set; }
        public string Type { get; set; }

    }
}
