using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICustomerRepository
    {
        bool AddCustomer(CustomerRequest customer);
        IEnumerable<Customer> GetAll();
        Customer? GetCustomer(int customerId);
        bool UpdateCustomer(int id,CustomerRequest updateobj);
        bool DeleteCustomer(int customerId);   
    }
}
