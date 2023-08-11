using carnation_backend.Models;

namespace carnation_backend.Repository
{
    public interface ICardRepository
    {
        IEnumerable<Card> GetAllCards();

        Card? GetCard(int id);

        bool CreateCard(Card card);
    }
}
