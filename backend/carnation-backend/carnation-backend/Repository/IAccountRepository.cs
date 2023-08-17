using carnation_backend.DAOs;
using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface IAccountRepository
    {
        Account? GetById(Guid id);
        Account? CreateAccount(AccountDAO accountDao, Customer owner);
        IEnumerable<Account?> GetAllAccounts();
        IEnumerable<Account> GetByCid(int cid);
        Account? UpdateBalance(Guid accountId, decimal amount, TransactionType transactionType);
        bool DeleteAccount(Guid id);

    }
}
