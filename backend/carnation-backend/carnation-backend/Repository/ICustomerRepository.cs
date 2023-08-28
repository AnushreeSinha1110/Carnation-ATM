using carnation_backend.DAOs;
using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICustomerRepository
    {
        bool AddCustomer(Customer customer);
        IEnumerable<Customer> GetAll();
        Customer? GetCustomer(int customerId);
        bool FlipStatus(int id);
        IEnumerable<Customer?> GetCustomerBySearch(string search);
        bool UpdateCustomer(int id,Customer updateobj);
        bool DeleteCustomer(int customerId);   
    }
}
