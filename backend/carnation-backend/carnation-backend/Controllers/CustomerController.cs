using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerController(ICustomerRepository _customerRepository)
        {
            this._customerRepository = _customerRepository;
        }
        [HttpGet,Route("GetAllCustomers")]
        public IActionResult GetCustomers()
        {
            return Ok(_customerRepository.GetAll());
        }
        [HttpGet, Route("GetCustomer/{id:int}")]
        public IActionResult GetCustomer([FromRoute]int id)
        {
            var customer=_customerRepository.GetCustomer(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }
        [HttpPost]
        public IActionResult AddCustomers(CustomerRequest customer)
        {
            bool flag=_customerRepository.AddCustomer(customer);
            if (flag == true)
            {
                return Ok();
            }
            return NotFound();
        }
        [HttpPut,Route("Update/{id:int}")]
        public IActionResult Update([FromRoute]int id,CustomerRequest updateobj)
        {
            bool flag = _customerRepository.UpdateCustomer(id,updateobj);
            if (flag == true)
            {
                return Ok();
            }
            return NotFound();
        }
        [HttpDelete,Route("Delete/{id:int}")]
        public IActionResult Delete([FromRoute]int id)
        {
            bool flag = _customerRepository.DeleteCustomer(id);
            if (flag == true)
            {
                return Ok();
            }
            return NotFound();
        }

    }
}
