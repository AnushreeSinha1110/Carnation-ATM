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
        private readonly IMapper _mapper;
        public CardRepository(DatabaseApiDbContext _dbContext, IMapper mapper)
        {
            _mapper = mapper;
            dbContext = _dbContext;
        }

        public bool CreateCard(CreateCardDAO createCard,Account account)
        {
            var card = _mapper.Map<Card>(createCard);
            card.CardNumber = Guid.NewGuid().ToString();
            card.Account = account;
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

        public bool UpdateCardByNum(int num, int crdPin, int validity)
        {
            var card = dbContext.Cards.Find(num);
            if (card == null) return false;
            card.CardPIN = crdPin;
            card.Validity = validity;
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
