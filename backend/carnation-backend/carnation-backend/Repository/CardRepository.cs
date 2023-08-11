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

        public Card? GetCardByNum(int num)
        {
           return dbContext.Cards.Find(num);
        }

        public Card? GetCardByID(Guid id)
        {
            return (Card)dbContext.Cards.Where(i => i.aidFK == id);
        }

        public bool UpdateCardByNum(int num, int crdPin, DateTime expDate)
        {
            var card = dbContext.Cards.Find(num);
            if (card == null) return false;
            card.cpin = crdPin;
            card.exp = expDate;
            return dbContext.SaveChanges() > 0;
        }

        public bool DeleteCardByNum(int num)
        {
            var card = dbContext.Cards.Find(num);
            if (card == null) return false;
            dbContext.Cards.Remove(card);
            return dbContext.SaveChanges() > 0;
        }
    }
}
