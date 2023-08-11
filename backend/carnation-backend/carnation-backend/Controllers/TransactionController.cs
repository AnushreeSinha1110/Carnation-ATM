using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Models.TransactionSubModel;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : Controller
    {
        private readonly ITransactionRepository _transactionRepository;
        public TransactionController(ITransactionRepository _transactionRepository)
        {
            this._transactionRepository = _transactionRepository;
        }
        [HttpGet, Route("GetAllTransactions")]
        public IActionResult GetTransactions()
        {
            return Ok(_transactionRepository.GetAll());
        }
        [HttpGet, Route("GetTransaction/{id:Guid}")]
        public IActionResult GetTransaction([FromRoute] Guid idt)
        {
            var transaction = _transactionRepository.GetTransaction(idt);
            if (transaction == null)
            {
                return NotFound();
            }
            return Ok(transaction);
        }
        [HttpPost]
        public IActionResult AddTransactions(TransactionRequestModel transaction)
        {
            bool flag = _transactionRepository.AddTransaction(transaction);
            if (flag == true)
            {
                return Ok();
            }
            return NotFound();
        }
       

    }
}
