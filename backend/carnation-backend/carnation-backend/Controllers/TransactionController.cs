using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Models.TransactionSubModel;
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

        [HttpGet, Route("GetTransaction")]
        public IActionResult GetTransactions()
        {
            return Ok(dbContext.Transactions.ToList());
        }

        [HttpGet, Route("GetTransaction/{id:Guid}")]
        public IActionResult GetTransaction([FromRoute] Guid id)
        {
            var transaction = dbContext.Transactions.Where(i => i.Aid == id);


            if (transaction == null)
            {
                return NotFound();
            }
            return Ok(transaction);
        }
        [HttpPost]
        public async Task<IActionResult> AddTransactions(TransactionRequestModel transaction)
        {
            var trnsc = new Transaction()
            {
                Aid = transaction.Aid,
                Amount = transaction.Amount,
                Type = transaction.Type,
            };
            await dbContext.Transactions.AddAsync(trnsc);
            await dbContext.SaveChangesAsync();
            return Ok(trnsc);
        }

    }
}
