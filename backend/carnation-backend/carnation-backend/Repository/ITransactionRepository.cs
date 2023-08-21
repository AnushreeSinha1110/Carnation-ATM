using carnation_backend.DAOs;
using carnation_backend.Models;
using carnation_backend.Models.TransactionSubModel;

namespace carnation_backend.Repository
{
    public interface ITransactionRepository
    {
        bool AddTransaction(TransactionRequestDAO transaction);
        IEnumerable<Transaction> GetAll();
        IEnumerable<Transaction> GetTransaction(Guid accId);
        bool DeleteTransaction(Guid transactionId);
    }
}
