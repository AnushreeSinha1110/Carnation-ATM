using AutoMapper;
using carnation_backend.DAOs;
using carnation_backend.Data;
using carnation_backend.Exceptions;
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
        private readonly IMapper mapper;


        public AccountController(IAccountRepository accountRepository, ICustomerRepository customerRepository, IMapper mapper)
        {
            this.accountRepository = accountRepository;
            this.customerRepository = customerRepository;

            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAccounts()
        {
            var accounts = accountRepository.GetAllAccounts();
            return Ok(accounts);
        }
        [HttpGet,Route("GetByCid")]
        public IActionResult GetByCid(int cid) {
            var accounts = accountRepository.GetByCid(cid);
            if (accounts == null)
            {
                return NotFound($"No accounts found for customer {cid}");
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
                return NotFound($"No user with account id ${accountId} found!!");
            }
            return Ok(account);
        }

        [HttpPost]
        public IActionResult CreateAccounts(AccountDAO accountDao)
        {
            try { 
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
            var account = mapper.Map<Account>(accountDao);
            var model = accountRepository.CreateAccount(account, owner);
            if (model == null)
                return BadRequest();
            return Ok(model);
            } catch (CustomerNotActiveException ex)
            {
                return BadRequest($"The customer is not active: {ex.Message}");
            } catch (Exception)
            {
                throw;
            }
        }


        [HttpPost]
        [Route("/updateBalance")]
        public ActionResult<Account?> UpdateBalance(UpdateBalanceDao updateBalanceDao)
        {
            try { 
            var account = accountRepository.UpdateBalance(updateBalanceDao.AccountId, updateBalanceDao.Amount, updateBalanceDao.TransactionType);
            if (account == null)
            {
                return NotFound();
            }

            return Ok(account);
            } catch (AccountNotFoundException ex)
            {
                return BadRequest($"Account not found {ex.Message}");
            } catch (Exception)
            {
                throw;
            }
        }
    }
}
