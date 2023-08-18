using carnation_backend.Models;
using System.ComponentModel.DataAnnotations;

namespace carnation_backend.DAOs
{
    public class TransactionRequestDAO
    {
        public Guid Aid { get; set; }
        [Range(0, int.MaxValue)]
        public decimal Amount { get; set; }
        public TransactionType Type { get; set; }
    }

}
