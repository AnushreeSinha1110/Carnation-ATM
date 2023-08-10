using carnation_backend.Data;
using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DatabaseApiDbContext dbContext;

        public CustomerRepository(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void AddCustomer(CustomerRequest customer)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Customer> GetAll()
        {
            throw new NotImplementedException();
        }

        public Customer? GetCustomer(int customerId)
        {
            return dbContext.Customers.Find(customerId);
        }
    }
}
