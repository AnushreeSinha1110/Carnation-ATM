using carnation_backend.Data;
using carnation_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace carnation_backend.Repository
{
    public class CardRepository : ICardRepository
    {
        private readonly DatabaseApiDbContext dbContext;
        public CardRepository(DatabaseApiDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public bool CreateCard(Card card)
        {
             dbContext.Cards.Add(card);
            return  dbContext.SaveChanges() > 0;
        }

        public IEnumerable<Card> GetAllCards()
        {
            return dbContext.Cards.ToList();
        }

        public Card? GetCard(int id)
        {
           return dbContext.Cards.Find(id);
        }
    }
}
