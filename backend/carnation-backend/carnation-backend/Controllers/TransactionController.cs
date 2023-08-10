using carnation_backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : Controller
    {
        private readonly DatabaseApiDbContext dbContext;
        public TransactionController(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetTransactions()
        {
            return Ok(dbContext.Transactions.ToList());
        }

    }
}
