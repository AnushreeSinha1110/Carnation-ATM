using AutoMapper;
using carnation_backend;
using carnation_backend.Controllers;
using carnation_backend.Models;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace carnation_backend_test.ControllerTest
{
    public class AccountControllerTest
    {
        private readonly Mock<IAccountRepository> accountMockRepository;
        private readonly Mock<ICustomerRepository> customerMockRepository;
        private readonly AccountController accountController;
        private readonly IMapper mapper;

        private Guid UserId1 = Guid.NewGuid();
        private Guid UserId2 = Guid.NewGuid();
        private Guid UserId3 = Guid.NewGuid();

        public AccountControllerTest()
        {
            this.accountMockRepository = new Mock<IAccountRepository>();
            this.customerMockRepository = new Mock<ICustomerRepository>();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AutoMapperProfile());
            });
            mapper = mappingConfig.CreateMapper();
            this.accountController = new AccountController(accountMockRepository.Object, customerMockRepository.Object, mapper);
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
        public void GetAllTestSuccess()
        {
            var accountList = GetAccountsData();
            accountMockRepository.Setup(x => x.GetAllAccounts()).Returns(accountList);

            var result = accountController.GetAccounts();
            var okresult = Assert.IsType<OkObjectResult>(result);
            var accounts = Assert.IsType<List<Account>>(okresult.Value);

            Assert.Equal(accountList.Count, accounts.Count);
        }

        [Fact]
        public void GetAllTestFailure()
        {
            var accountList = GetAccountsData();
            accountMockRepository.Setup(x => x.GetAllAccounts()).Returns((IEnumerable<Account>)null);

            var result = accountController.GetAccounts();
            var notfound = Assert.IsType<NotFoundResult>(result);


        }

        

    }
}
