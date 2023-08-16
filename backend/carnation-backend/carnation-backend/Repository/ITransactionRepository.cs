using carnation_backend.Models;
using carnation_backend.Models.TransactionSubModel;

namespace carnation_backend.Repository
{
    public interface ITransactionRepository
    {
        bool AddTransaction(TransactionRequestModel transaction);
        IEnumerable<Transaction> GetAll();
        Transaction GetTransaction(Guid accId);
        bool DeleteTransaction(Guid transactionId);
    }
}
