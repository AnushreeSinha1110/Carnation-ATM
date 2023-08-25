using AutoMapper;
using carnation_backend;
using carnation_backend.DAOs;
using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Repository;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace carnation_backend_test.RepositoryTest
{
    
    public class AccountRepositoryTest
    {
        private Guid UserId1 = Guid.NewGuid();
        private Guid UserId2 = Guid.NewGuid();
        private Guid UserId3 = Guid.NewGuid();

        private DbContextOptions<DatabaseApiDbContext> dbContextOptions;
        private DatabaseApiDbContext db;
        private AccountRepository? accountRepository;

        public AccountRepositoryTest()
        {
            var dbName = Constants.ConnectionString;
            dbContextOptions = new DbContextOptionsBuilder<DatabaseApiDbContext>().UseSqlServer(dbName).Options;
            db = new DatabaseApiDbContext(dbContextOptions);
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

        private List<Customer> GetCustomerData()
        {
            return new List<Customer>()
            {
                new Customer
                {
                    Id = 1
                },
                new Customer
                {
                    Id = 2
                }
            };
        }
        [Fact]
        public void TestGetAllAccounts()
        {
            accountRepository = new AccountRepository(db);

            var accounts = accountRepository.GetAllAccounts();

            Assert.NotNull(accounts);
            Assert.IsType<List<Account>>(accounts);
        }

        [Fact]
        public void TestGetAccountById()
        {
            accountRepository = new AccountRepository(db);
            var account = accountRepository.GetById(Guid.NewGuid());

            Assert.Null(account);

        }
        
        /*

        [Fact]
        public void TestGetAccountByCID()
        {
            accountRepository = new AccountRepository(db);
            // Setup
            var accountList = GetAccountsData();
            var customerList = GetCustomerData();
            accountRepository.CreateAccount(accountList[0], customerList[0]);
            accountRepository.CreateAccount(accountList[1], customerList[0]);
            accountRepository.CreateAccount(accountList[2], customerList[1]);

            var accountResult = accountRepository.GetByCid(1).ToList();

            Assert.NotNull(accountResult);
            Assert.Equal(2, accountResult.Count);
            Assert.Equal(accountList[0].AccountOwnerId, accountResult[0].AccountOwnerId);
        }

        [Fact]
        public void TestGetAccountList()
        {
            accountRepository = new AccountRepository(db);
            // Setup
            var accountList = GetAccountsData();
            var customerList = GetCustomerData();
            accountRepository.CreateAccount(accountList[0], customerList[0]);
            accountRepository.CreateAccount(accountList[1], customerList[0]);
            accountRepository.CreateAccount(accountList[2], customerList[1]);

            var accountResult = accountRepository.GetAllAccounts().ToList();

            Assert.NotNull(accountResult);
            Assert.Equal(accountList.Count, accountResult.Count);
        }
        
        [Fact]
        public void TestGetAccountById()
        {

            accountRepository = new AccountRepository(db);
            // Setup
            var accountList = GetAccountsData();
            var customerList = GetCustomerData();
            accountRepository.CreateAccount(accountList[0], customerList[0]);
            accountRepository.CreateAccount(accountList[1], customerList[0]);
            accountRepository.CreateAccount(accountList[2], customerList[1]);

            var accountResult = accountRepository.GetById(UserId1);

            Assert.NotNull(accountResult);
            Assert.Equal(accountList[1].Id, accountResult.Id);
        }

        [Fact]
        public void TestCreateAccount()
        {
            accountRepository = new AccountRepository(db);
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

            var accountResult = accountRepository.CreateAccount(account, customer);

            Assert.NotNull(accountResult);
            Assert.Equal(account.Id, accountResult.Id);
        }
        /**
        [Fact]
        public void TestDeleteAccountSuccess()
        {
            var accountList = GetAccountsData();

            accountRepository.Setup(x => x.DeleteAccount(UserId3)).Returns(true);
            var result = accountRepository.Object;
            var accountResult = result.DeleteAccount(UserId3);

            Assert.True(accountResult);

        }
        */
        /**

        [Fact]
        public void TestDeleteAccountFailure()
        {
            var accountList = GetAccountsData();

            accountRepository.Setup(x => x.DeleteAccount(Guid.NewGuid())).Returns(false);
            var result = accountRepository.Object;
            var accountResult = result.DeleteAccount(Guid.NewGuid());

            Assert.False(accountResult);

        }
        */
        /*
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
        */
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
