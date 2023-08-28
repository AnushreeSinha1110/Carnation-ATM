using carnation_backend.DAOs;
using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICardRepository
    {
        IEnumerable<Card> GetAllCards();

        Card? GetCardByNum(int num);

        Card? GetCardByID(Guid id);

        bool CreateCard(Card card, Account account);

        bool UpdateCard(Card updateCard);

        bool DeleteCardByNum(int num);
    }
}
