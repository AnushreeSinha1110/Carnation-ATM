using carnation_backend.Controllers;
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

        public AccountControllerTest()
        {
            this.accountMockRepository = new Mock<IAccountRepository>();
            this.customerMockRepository = new Mock<ICustomerRepository>();
            this.accountController = new AccountController(accountMockRepository.Object, customerMockRepository.Object);
        }

        [Fact]
        public void GetAllTest()
        {
            var result = accountController.GetAccounts();
            Assert.IsType<OkObjectResult>(result);
        }
    }
}
