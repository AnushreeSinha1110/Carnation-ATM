using carnation_backend.DAOs;
using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IAccountRepository accountRepository;
        private readonly ICustomerRepository customerRepository;

        public AccountController(IAccountRepository accountRepository, ICustomerRepository customerRepository)
        {
            this.accountRepository = accountRepository;
            this.customerRepository = customerRepository;
        }

        [HttpGet]
        public IActionResult GetAccounts()
        {
            var accounts = accountRepository.GetAllAccounts();
            if (accounts == null)
            {
                return NotFound();
            }
            return Ok(accounts);
        }
        [HttpGet,Route("GetByCid")]
        public IActionResult GetByCid(int cid) {
            var accounts = accountRepository.GetByCid(cid);
            if (accounts == null)
            {
                return NotFound();
            }
            return Ok(accounts);
        }

        [HttpGet]
        [Route("/GetAccount")]
        public ActionResult<Account?> GetAccountById(Guid accountId)
        {
            var account = accountRepository.GetById(accountId);
            if (account == null)
            {
                return NotFound();
            }
            return Ok(account);
        }

        [HttpPost]
        public IActionResult CreateAccounts(AccountDAO accountDao)
        {
            var owner = customerRepository.GetCustomer(accountDao.AccountOwnerId);
            if (owner == null)
            {
                return NotFound("Given customer id doesn't exist");
            }
            if (!Enum.IsDefined(typeof(AccountType), accountDao.AType))
            {
                return BadRequest("Given account type doesn't exist");
            }
            /*
            var accountTypeEnum = (AccountType)accountDao.AType;

            var model = new Account(accountTypeEnum, owner); */

            var model = accountRepository.CreateAccount(accountDao, owner);

            return Ok(model);
        }


        [HttpPost]
        [Route("/updateBalance")]
        public ActionResult<Account?> UpdateBalance(UpdateBalanceDao updateBalanceDao)
        {
            //var account = accountRepository.UpdateBalance(updateBalanceDao.AccountId, updateBalanceDao.Amount, updateBalanceDao.TransactionType);
            var account = new Account();
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
        }
    }
}
