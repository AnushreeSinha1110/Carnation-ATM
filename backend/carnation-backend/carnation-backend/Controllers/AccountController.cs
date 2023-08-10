using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Models.AccountSubModel;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly DatabaseApiDbContext dbContext;

        public AccountController(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAccounts()
        {
            var accounts = dbContext.Accounts.ToList();
            if (accounts == null)
            {
                return NotFound();
            }
            return Ok(accounts);
        }

        [HttpPost]
        public IActionResult CreateAccounts(int customerId, int accountType)
        {
            var owner = dbContext.Customers.Find(customerId);
            if (owner == null)
            {
                return NotFound("Given customer id doesn't exist");
            }
            if (!Enum.IsDefined(typeof(AccountType), accountType))
            {
                return BadRequest("Given account type doesn't exist");
            }

            var accountTypeEnum = (AccountType)accountType;

            var model = new Account(accountTypeEnum, owner);

            dbContext.Accounts.Add(model);
            dbContext.SaveChanges();

            return Ok(model);
        }
    }
}
