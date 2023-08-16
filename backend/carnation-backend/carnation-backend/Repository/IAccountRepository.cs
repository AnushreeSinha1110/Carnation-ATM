using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface IAccountRepository
    {
        Account? GetById(Guid id);
        Account? CreateAccount(Account account);
        IEnumerable<Account?> GetAllAccounts();
        Account UpdateAccount(Account account);
        bool DeleteAccount(Guid id);

    }
}
