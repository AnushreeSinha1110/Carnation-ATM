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
    public class TransactionControllerTest
    {
        private readonly Mock<ITransactionRepository> transactionRepository;
        private readonly TransactionController transactionController;

        public TransactionControllerTest()
        {
            this.transactionRepository = new Mock<ITransactionRepository>();
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AutoMapperProfile());
            });
            var mapper = mappingConfig.CreateMapper();
            this.transactionController = new TransactionController(transactionRepository.Object,mapper);
        }
        [Fact]
        public void GetAllTestSuccess()
        {
            transactionRepository.Setup(x => x.GetAll()).Returns(new List<Transaction>() {
                new Transaction(),
                    new Transaction()
            });
            var result = transactionController.GetTransactions();
            var okresult = Assert.IsType<OkObjectResult>(result);
            var transactions = Assert.IsType<List<Transaction>>(okresult.Value);

            Assert.Equal(2, transactions.Count);

        }
      
    }
}
