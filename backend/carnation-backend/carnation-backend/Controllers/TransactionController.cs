using AutoMapper;
using carnation_backend.DAOs;
using carnation_backend.Data;
using carnation_backend.Models;

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
        public IActionResult GetTransaction([FromRoute] Guid id)
        {
            var transaction = _transactionRepository.GetTransaction(id);
            if (transaction == null)
            {
                return NotFound();
            }
            return Ok(transaction);
        }
        private readonly IMapper _mapper;
       
        [HttpPost]
        public IActionResult AddTransactions(TransactionRequestDAO transaction)
        {
            
            bool flag = _transactionRepository.AddTransaction(transaction);
            if (flag == true)
            {
                return Ok(transaction);
            }
            return NotFound();
        }
        [HttpGet,Route("GetCheques")]
        public IActionResult GetCheques()
        {
            var chqs=_transactionRepository.GetCheques();
            
            return Ok(chqs);
        }
        [HttpPut,Route("ApproveCheque")]
        public IActionResult ApproveCheque(Guid trnscId)
        {
            bool flag=_transactionRepository.approveCheque(trnscId);
            if(flag == true)
            {
                return Ok("{\"message\":\"Cheque approved\"}");
            }
            return NotFound();
        } 
        
        [HttpDelete, Route("Delete/{id:int}")]
        public IActionResult Delete([FromRoute] Guid id)
        {
            bool flag = _transactionRepository.DeleteTransaction(id);
            if (flag == true)
            {
                return Ok();
            }
            return NotFound();
        }

    }
}
