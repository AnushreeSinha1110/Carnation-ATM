using carnation_backend.Models;

namespace carnation_backend.DAOs
{
    public record struct UpdateBalanceDao(Guid AccountId, decimal Amount, TransactionType TransactionType);
}
