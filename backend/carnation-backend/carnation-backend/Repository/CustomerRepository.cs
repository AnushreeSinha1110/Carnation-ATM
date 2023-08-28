using AutoMapper;
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
        public bool AddCustomer(Customer customer)
        {
            /*
            var cstmr = new Customer()
            {
                Name = customer.name,
                Age = customer.age,
                Gender = customer.gender,
                City = customer.city,
                Pincode = customer.pincode,
                Address = customer.addr,
                Phone = customer.phone
            };*/
            //var cstmr=_mapper.Map<Customer>(customer);

            dbContext.Customers.Add(customer);
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
        public IEnumerable<Customer?> GetCustomerBySearch(string search)
        {
            return dbContext.Customers
                //.Where(c => c.Name == search || c.Phone == search)
                .Where(c => c.Name.ToLower().Contains(search)||c.Phone.Contains(search))
                .Include(c => c.Accounts)
                .ToList();
        }
        public bool UpdateCustomer(int id, Customer updateobj)
        {
            var customer = dbContext.Customers.Find(id);
            if (customer != null)
            {
                //customer= _mapper.Map<Customer>(updateobj);
                //customer = updateobj;
                //_mapper.Map(updateobj, customer);
                //dbContext.Customers.Attach(updateobj);
                //dbContext.ObjectStateManager.
                //dbContext.Entry(customer).State = updateobj;
                dbContext.Entry(customer).CurrentValues.SetValues(updateobj);
                return dbContext.SaveChanges() > 0;
            }
            return false;
        }
        public bool FlipStatus(int id)
        {
            var customer= dbContext.Customers.Find(id);
            if(customer == null)
            {
                return false;
            }
            customer.IsActive=!customer.IsActive;
            return dbContext.SaveChanges()>0;
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
