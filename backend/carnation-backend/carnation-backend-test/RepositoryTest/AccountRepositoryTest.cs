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
        public void TestGetAccountByCID()
        {

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

        [Fact]
        public void TestGetAccountById()
        {
            var accountList = GetAccountsData();
            accountRepository.Setup(x => x.GetById(UserId1)).Returns(accountList[1]);

            var result = accountRepository.Object;
            var accountResult = result.GetById(UserId1);

            Assert.NotNull(accountResult);
            Assert.Equal(accountList[1].Id, accountResult.Id);
        }

        [Fact]
        public void TestCreateAccount()
        {

        }

        [Fact]
        public void TestDeleteAccount()
        {

        }

        [Fact]
        public void TestUpdateBalanceWithdraw()
        {

        }

        [Fact]
        public void TestUpdateBalanceDeposit()
        {

        }

        [Fact]
        public void TestUpdateBalanceTransfer()
        {

        }


    }
}
