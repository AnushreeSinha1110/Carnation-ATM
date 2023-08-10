using carnation_backend.Data;
using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly DatabaseApiDbContext dbContext;

        public AccountRepository(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public bool CreateAccount(Account account)
        {
            dbContext.Accounts.Add(account);
            return dbContext.SaveChanges() > 0;

        }

        public bool DeleteAccount(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Account> GetAllAccounts()
        {
            return dbContext.Accounts.ToList();
        }

        public Account GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Account UpdateAccount(Account account)
        {
            throw new NotImplementedException();
        }
    }
}
