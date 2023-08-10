using carnation_backend.Data;
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
            return Ok(accounts);
        }
    }
}
