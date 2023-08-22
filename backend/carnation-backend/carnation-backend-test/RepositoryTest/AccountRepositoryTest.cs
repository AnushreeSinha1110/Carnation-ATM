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

        public AccountRepositoryTest()
        {
            accountRepository = new Mock<IAccountRepository>();
        }

        [Fact]
        public void TestAccountCreation()
        {
            var account = new Account();

            Assert.NotNull(account);
        }
    }
}
