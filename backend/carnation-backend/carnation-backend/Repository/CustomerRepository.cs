using carnation_backend.DAOs;
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
                Name = customer.name,
                Age = customer.age,
                Gender = customer.gender,
                City = customer.city,
                Pincode = customer.pincode,
                Address = customer.addr,
                Phone = customer.phone
            };
            dbContext.Customers.Add(cstmr);
            return (dbContext.SaveChanges())>0;
        }

        public IEnumerable<Customer> GetAll()
        {
            return dbContext.Customers
                .Include(c => c.Accounts);
        }

        public Customer? GetCustomer(int customerId)
        {
            return dbContext.Customers
                .Where(c => c.Id == customerId)
                .Include(c => c.Accounts)
                .FirstOrDefault();
        }

        public bool UpdateCustomer(int id, CustomerRequest updateobj)
        {
            var customer = dbContext.Customers.Find(id);
            if (customer != null)
            {
                customer.Name = updateobj.name;
                customer.Age = updateobj.age;
                customer.City = updateobj.city;
                customer.Pincode = updateobj.pincode;
                customer.Gender = updateobj.gender;
                customer.Address = updateobj.addr;
                customer.Phone = updateobj.phone;
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
