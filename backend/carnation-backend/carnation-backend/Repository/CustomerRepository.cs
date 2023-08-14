using carnation_backend.Data;
using carnation_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace carnation_backend.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DatabaseApiDbContext dbContext;

        public CustomerRepository(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public bool AddCustomer(CustomerRequest customer)
        {

            var cstmr = new Customer()
            {
                name = customer.name,
                age = customer.age,
                addr = customer.addr,
                phone = customer.phone
            };
            dbContext.Customers.Add(cstmr);
            return (dbContext.SaveChanges())>0;
        }

        public IEnumerable<Customer> GetAll()
        {
            return dbContext.Customers.ToList();
        }

        public Customer GetCustomer(int customerId)
        {
            return dbContext.Customers.Find(customerId);
        }
        public bool UpdateCustomer(int id, CustomerRequest updateobj)
        {
            var customer = dbContext.Customers.Find(id);
            if (customer != null)
            {
                customer.name = updateobj.name;
                customer.age = updateobj.age;
                customer.addr = updateobj.addr;
                customer.phone = updateobj.phone;
                return dbContext.SaveChanges() > 0;
            }
            return false;
        }
        public bool DeleteCustomer(int customerId)
        {
            var customer = dbContext.Customers.Find(customerId);
            if (customer != null)
            {
                dbContext.Customers.Remove(customer);
                return dbContext.SaveChanges() > 0;
            }
            return false;
        }
    }
}
