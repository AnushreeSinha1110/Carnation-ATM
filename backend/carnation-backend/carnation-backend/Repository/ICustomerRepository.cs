using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICustomerRepository
    {
        void AddCustomer(AddCustomerRequest customer);
        IEnumerable<Customer> GetAll();
    }
}
