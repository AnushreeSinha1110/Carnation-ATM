using AutoMapper;
using carnation_backend.DAOs;
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

        public bool CreateCard(Card card,Account account)
        {
            //var card = _mapper.Map<Card>(createCard);
            card.CardNumber = Guid.NewGuid().ToString();
            card.Account = account;
            if (!account.AccountOwner.IsActive)
                return false;
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
            return (Card)dbContext.Cards.Where(i => i.AccountId == id);
        }

        public bool UpdateCard(Card updateCard)
        {
           // var card = dbContext.Cards.Where(c => c.CardNumber == updateCard.CardNumber).FirstOrDefault();
            
            var card = dbContext.Cards.Find(updateCard.Id);
            if (card == null) return false;
            else
            {
                var acc = dbContext.Accounts.Find(card.AccountId);
                var cus = dbContext.Customers.Find(acc.AccountOwnerId);
                if (cus.IsActive)
                {
                    updateCard.CardNumber = card.CardNumber;
                    updateCard.AccountId = card.AccountId;
                    updateCard.Account = card.Account;

                    dbContext.Entry(card).CurrentValues.SetValues(updateCard);
                    return dbContext.SaveChanges() > 0;
                }
                else
                    return false;
            }
            //   card.CardPIN = crdPin;
            //   card.Validity = validity;
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
