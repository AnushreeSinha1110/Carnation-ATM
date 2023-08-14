using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICardRepository
    {
        IEnumerable<Card> GetAllCards();

        Card? GetCardByNum(int num);

        Card? GetCardByID(Guid id);

        bool CreateCard(Card card);

        bool UpdateCardByNum(int num, int crdPin, DateTime expDate);

        bool DeleteCardByNum(int num);
    }
}
