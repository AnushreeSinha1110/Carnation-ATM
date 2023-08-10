using carnation_backend.Data;
using carnation_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly DatabaseApiDbContext dbContext;
        public CustomerController(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet,Route("GetAllCustomers")]
        public IActionResult GetCustomers()
        {
            return Ok(dbContext.Customers.ToList());
        }
        [HttpGet, Route("GetCustomer/{id:int}")]
        public async Task<IActionResult> GetCustomer([FromRoute]int id)
        {
            var customer=await dbContext.Customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }
        [HttpPost]
        public async Task<IActionResult> AddCustomers(AddCustomerRequest customer)
        {
            var cstmr = new Customer()
            {
                name = customer.name,
                age = customer.age,
                addr = customer.addr,
                phone = customer.phone
            };
            await dbContext.Customers.AddAsync(cstmr);
            await dbContext.SaveChangesAsync();
            return Ok(cstmr);
        }
    }
}
