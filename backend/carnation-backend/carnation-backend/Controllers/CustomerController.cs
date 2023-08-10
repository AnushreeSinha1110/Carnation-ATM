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
        public async Task<IActionResult> AddCustomers(CustomerRequest customer)
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
        [HttpPut,Route("Update/{id:int}")]
        public async Task<IActionResult> Update([FromRoute]int id,CustomerRequest updateobj)
        {
            var customer = await dbContext.Customers.FindAsync(id);
            if (customer != null)
            {
                customer.name= updateobj.name;
                customer.age= updateobj.age;
                customer.addr= updateobj.addr;
                customer.phone= updateobj.phone;
                await dbContext.SaveChangesAsync();
                return Ok(customer);
            }
            return NotFound();
        }
        [HttpDelete,Route("Delete/{id:int}")]
        public async Task<IActionResult> Delete([FromRoute]int id)
        {
            var customer = await dbContext.Customers.FindAsync(id);
            if(customer!=null)
            {
                dbContext.Customers.Remove(customer);
                await dbContext.SaveChangesAsync();
                return Ok(customer);
            }
            return NotFound();
        }

    }
}
