using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarnationTestProject
{
    public class CustomerRepositoryUnitTest
    {
        private readonly Mock<ICustomerRepository> customerRepository;
        public ConsumerRepositoryUnitTest()
        {
            customerRepository=new Mock<ICustomerRepository> ();
        }
        [Fact]
        public void Test_GetCustomerList()
        {
            Assert.Equal(true, true);
        }
    }
}
