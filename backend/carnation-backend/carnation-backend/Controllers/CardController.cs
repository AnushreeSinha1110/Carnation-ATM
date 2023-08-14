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
        public CardController(ICardRepository cardRepository)
        {
            this.cardRepository = cardRepository;
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
        public IActionResult CreateCard(int crdPin, DateTime expDate, Guid accID)
        {
            var card = new Card()
            {
                cpin = crdPin,
                exp = expDate,
                aidFK = accID
            };
            
            return Ok(cardRepository.CreateCard(card));
        }
        [HttpPut, Route("UpdateCardByNum")]
        public IActionResult UpdateCardByNum([FromRoute] int num, int crdPin, DateTime expDate)
        {
            return Ok(cardRepository.UpdateCardByNum(num, crdPin, expDate));
        }
        [HttpDelete, Route("DeleteCardByNum")]
        public IActionResult DeleteCardByNum([FromRoute]int num)
        {
            return Ok(cardRepository.DeleteCardByNum(num));
        }
    }
}
