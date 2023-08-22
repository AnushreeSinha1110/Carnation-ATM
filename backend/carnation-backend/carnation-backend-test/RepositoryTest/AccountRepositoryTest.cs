using carnation_backend.DAOs;
using carnation_backend.Models;
using carnation_backend.Repository;
using Moq;

namespace carnation_backend_test.RepositoryTest
{
    public class AccountRepositoryTest
    {
        private readonly Mock<IAccountRepository> accountRepository;
        private Guid UserId1 = Guid.NewGuid();
        private Guid UserId2 = Guid.NewGuid();
        private Guid UserId3 = Guid.NewGuid();

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
                },
                new Account
                {
                    Id = UserId2,
                    AccountNumber = Guid.NewGuid().ToString(),
                    AccountOwnerId = 2,
                    AType = (AccountType) 0,
                    Balance = 100,
                }
            };
        }

        [Fact]
        public void TestGetAccountByCID()
        {
            var accountList = GetAccountsData();
            accountRepository.Setup(x => x.GetByCid(1)).Returns(accountList.SkipLast(1).ToList());

            var result = accountRepository.Object;
            var accountResult = result.GetByCid(1).ToList();

            Assert.NotNull(accountResult);
            Assert.Equal(2, accountResult.Count);
            Assert.Equal(accountList[0].AccountOwnerId, accountResult[0].AccountOwnerId);
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
            var account = new Account
            {
                Id = UserId3,
                AccountNumber = Guid.NewGuid().ToString(),
                AccountOwnerId = 3,
                AType = (AccountType)1,
                Balance = 500,
            };

            var accountList = GetAccountsData();
            accountList.Add(account);

            AccountDAO accountDAO = new AccountDAO
            {
                AccountOwnerId = 3,
                AType = (AccountType)1,
            };

            Customer customer = new Customer
            {
                Id = 3
            };

            accountRepository.Setup(x => x.CreateAccount(accountDAO, customer)).Returns(account);

            var result = accountRepository.Object;
            var accountResult = result.CreateAccount(accountDAO, customer);

            Assert.NotNull(accountResult);
            Assert.Equal(account.Id, accountResult.Id);
        }

        [Fact]
        public void TestDeleteAccountSuccess()
        {
            var accountList = GetAccountsData();

            accountRepository.Setup(x => x.DeleteAccount(UserId3)).Returns(true);
            var result = accountRepository.Object;
            var accountResult = result.DeleteAccount(UserId3);

            Assert.True(accountResult);

        }

        [Fact]
        public void TestDeleteAccountFailure()
        {
            var accountList = GetAccountsData();

            accountRepository.Setup(x => x.DeleteAccount(Guid.NewGuid())).Returns(false);
            var result = accountRepository.Object;
            var accountResult = result.DeleteAccount(Guid.NewGuid());

            Assert.False(accountResult);

        }
        [Fact]
        public void TestUpdateBalanceWithdraw()
        {
            var accountList = GetAccountsData();
            var account = accountList[2];
            account.Balance -= 50;

            accountRepository.Setup(x => x.UpdateBalance(UserId2, 50, TransactionType.WITHDRAW)).Returns(account);

            var result = accountRepository.Object;
            var accountResult = result.UpdateBalance(UserId2, 50, TransactionType.WITHDRAW);

            Assert.NotNull(accountResult);
            Assert.Equal(50, accountResult.Balance);

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
