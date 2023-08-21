using carnation_backend.DAOs;
using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICustomerRepository
    {
        bool AddCustomer(CustomerRequest customer);
        IEnumerable<Customer> GetAll();
        Customer? GetCustomer(int customerId);
        IEnumerable<Customer?> GetCustomerBySearch(string search);
        bool UpdateCustomer(int id,CustomerRequest updateobj);
        bool DeleteCustomer(int customerId);   
    }
}
