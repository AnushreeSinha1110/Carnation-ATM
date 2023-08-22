using carnation_backend.Models;
using carnation_backend.Repository;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace carnation_backend_test.RepositoryTest
{
    public class AccountRepositoryTest
    {
        private readonly Mock<IAccountRepository> accountRepository;
        private Guid UserId1 = Guid.NewGuid();

        public AccountRepositoryTest()
        {
            accountRepository = new Mock<IAccountRepository>();
        }

        private List<Account> GetAccountsData()
        {
           return new List<Account>()
            {
                new Account
                {
                    Id = Guid.NewGuid(),
                    AccountNumber = Guid.NewGuid().ToString(),
                    AccountOwnerId = 1,
                    AType = (AccountType) 0,
                    Balance = 0,
                },
                new Account
                {
                    Id = UserId1,
                    AccountNumber = Guid.NewGuid().ToString(),
                    AccountOwnerId = 1,
                    AType = (AccountType) 0,
                    Balance = 0,
                }
            };
        }

        [Fact]
        public void TestAccountCreation()
        {
            var account = new Account();
            Assert.NotNull(account);
        }

        [Fact]
        public void TestGetAccountList()
        {
            var accountList = GetAccountsData();

            accountRepository.Setup(x => x.GetAllAccounts()).Returns(accountList);

            var result = accountRepository.Object;
            var accountResult = result.GetAllAccounts().ToList();

            Assert.NotNull(accountResult);
            Assert.Equal(accountList.Count, accountResult.Count);
        }
    }
}
