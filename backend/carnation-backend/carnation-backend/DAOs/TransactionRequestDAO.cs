using carnation_backend.Models;

namespace carnation_backend.DAOs
{
    public class TransactionRequestDAO
    {
        public Guid Aid { get; set; }
        public decimal Amount { get; set; }
        public Guid? ToAid { get; set; }
        public TransactionType Type { get; set; }
    }

}
