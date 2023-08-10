using carnation_backend.Data;
using carnation_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardController : Controller
    {
        private readonly DatabaseApiDbContext dbContext;
        public CardController(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet, Route("GetAllCards")]
        public IActionResult GetCards()
        {
            return Ok(dbContext.Cards.ToList());
        }
        [HttpGet, Route("GetCard")]
        public async Task<IActionResult> GetCard([FromRoute]int id)
        {
            var card = await dbContext.Cards.FindAsync(id);
            if (card == null) 
            { 
                return NotFound();
            }
            return Ok(card);
        }
        [HttpPost]
        public async Task<IActionResult> CreateCard(int crdPin, DateTime expDate, Guid accID)
        {
            var card = new Card()
            {
                cpin = crdPin,
                exp = expDate,
                aidFK = accID
            };
            await dbContext.Cards.AddAsync(card);
            await dbContext.SaveChangesAsync();
            return Ok(card);
        }
    }
}
