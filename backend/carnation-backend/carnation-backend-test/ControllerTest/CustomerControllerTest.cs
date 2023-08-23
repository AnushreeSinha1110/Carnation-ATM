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
    public class CustomerControllerTest
    {
        private readonly Mock<ICustomerRepository> customerRepository;
        private readonly CustomerController customerController;
        public CustomerControllerTest()
        {
            this.customerRepository = new Mock<ICustomerRepository>();
            this.customerController = new CustomerController(customerRepository.Object);
        }
        [Fact]
        public void GetAllTestSuccess()
        {
            customerRepository.Setup(x => x.GetAll()).Returns(new List<Customer>() {
                new Customer(),
                    new Customer()
            });
            var result = customerController.GetCustomers();
            var okresult = Assert.IsType<OkObjectResult>(result);
            var accounts = Assert.IsType<List<Customer>>(okresult.Value);

            Assert.Equal(2, accounts.Count);
        }
        [Fact]
        public void GetAllTestFailure() 
        {
            customerRepository.Setup(x => x.GetAll()).Returns((IEnumerable<Customer>)null);
            var result = customerController.GetCustomers();
            var accounts= Assert.IsType<NotFoundResult>(result);
        }
    }
}
