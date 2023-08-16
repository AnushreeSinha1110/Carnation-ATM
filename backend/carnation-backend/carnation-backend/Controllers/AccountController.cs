using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Models.AccountSubModel;
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

        [HttpPost]
        public IActionResult CreateAccounts(int customerId,int accountType)
        {
            var owner = customerRepository.GetCustomer(customerId);
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

            accountRepository.CreateAccount(model);

            return Ok(model);
        }
    }
}
