using carnation_backend.DAOs;
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
    public class CustomerRepositoryTest
    {
        private readonly Mock<ICustomerRepository> customerRepository;
        public CustomerRepositoryTest()
        {
            customerRepository=new Mock<ICustomerRepository>();
        }
        private List<Customer> GetCustomersData()
        {
            return new List<Customer>()
            {
                new Customer
                {
                    Id = 1,
                    Name="John",
                    Address="101/45",
                    City="Bangalore",
                    Pincode="753124",
                    Age=41,
                    Gender='M',
                    Phone="9810981098"
                },
                new Customer
                {
                    Id = 2,
                    Name="Jake",
                    Address="102/46A",
                    City="Bangalore",
                    Pincode="700124",
                    Age=23,
                    Gender='M',
                    Phone="9810981089"
                }
            };
        }
        [Fact]
        public void TestGetCustomerList()
        {
            var customerList = GetCustomersData();

            customerRepository.Setup(x => x.GetAll()).Returns(customerList);

            var result = customerRepository.Object;
            var customerResult = result.GetAll().ToList();

            Assert.NotNull(customerResult);
            Assert.Equal(customerList.Count, customerResult.Count);
        }
        [Fact]
        public void TestGetCustomerById()
        {
            var customerList = GetCustomersData();
            customerRepository.Setup(x => x.GetCustomer(1)).Returns(customerList[0]);

            var result = customerRepository.Object;
            var customerResult = result.GetCustomer(1);
            
            Assert.NotNull(customerResult);
            Assert.Equal(customerList[0].Id, customerResult.Id);
        }
        [Fact]
        public void TestCustomerCreate()
        {
            var cstmr = new CustomerRequest
            {
                name = "Ben",
                address = "A8/4",
                city = "Kolkata",
                pincode = "700097",
                age = 22,
                gender = 'M',
                phone = "8617285341"
            };
            customerRepository.Setup(x => x.AddCustomer(cstmr)).Returns(true);

            var result = customerRepository.Object;
            var customerResult = result.AddCustomer(cstmr);
            Assert.True(customerResult);
        }
        
    }
}
