using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICustomerRepository
    {
        void AddCustomer(CustomerRequest customer);
        IEnumerable<Customer> GetAll();
    }
}
