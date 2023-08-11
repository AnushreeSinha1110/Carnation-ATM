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
        [HttpGet, Route("GetCard")]
        public IActionResult GetCard([FromRoute]int id)
        {
            var card = cardRepository.GetCard(id);
            if (card == null) 
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
    }
}
