using carnation_backend.DAOs;
using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardController : Controller
    {
        private readonly ICardRepository cardRepository;
        private readonly IAccountRepository accountRepository;
        public CardController(ICardRepository cardRepository, IAccountRepository accountRepository)
        {
            this.cardRepository = cardRepository;
            this.accountRepository = accountRepository;
        }
        [HttpGet, Route("GetAllCards")]
        public IActionResult GetCards()
        {
            return Ok(cardRepository.GetAllCards());
        }
        [HttpGet, Route("GetCardByNum")]
        public IActionResult GetCardByNum([FromRoute]int num)
        {
            var card = cardRepository.GetCardByNum(num);
            if (card == null) 
            { 
                return NotFound();
            }
            return Ok(card);
        }
        [HttpGet, Route("GetCardByID")]
        public IActionResult GetCardByID([FromRoute]Guid id)
        {
            var card = cardRepository.GetCardByID(id);
            if (card == null )
            {
                return NotFound();
            }
            return Ok(card);
        }
        [HttpPost]
        public IActionResult CreateCard(CreateCardDAO createCard)
        {
            var account = accountRepository.GetById(createCard.AccountId);

            if (account == null)
            {
                return NotFound("{\"error\": \"Account Not Found\"}");
            }

            //var card = new Card()
            //{
            //    CardNumber = Guid.NewGuid().ToString(),
            //    CardPIN = createCard.CardPin,
            //    Validity = createCard.Validity,
            //    AccountId = createCard.AccountId,
            //    Account = account
            //};

 
            return Ok(cardRepository.CreateCard(createCard,account));
        }
        [HttpPut, Route("UpdateCardByNum")]
        public IActionResult UpdateCardByNum([FromRoute] int num, int crdPin, int validity)
        {
            return Ok(cardRepository.UpdateCardByNum(num, crdPin, validity));
        }
        [HttpDelete, Route("DeleteCardByNum")]
        public IActionResult DeleteCardByNum([FromRoute]int num)
        {
            return Ok(cardRepository.DeleteCardByNum(num));
        }
    }
}
