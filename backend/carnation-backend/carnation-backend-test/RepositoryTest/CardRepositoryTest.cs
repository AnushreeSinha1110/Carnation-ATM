using carnation_backend.Models;
using carnation_backend.Repository;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace carnation_backend_test.RepositoryTest
{
    public class CardRepositoryTest
    {
        private readonly Mock<ICardRepository> cardRepository;
        public CardRepositoryTest()
        {
            cardRepository = new Mock<ICardRepository>();
        }
        private List<Card> GetCardsData()
        {
            return new List<Card>()
            {
                new Card
                {
                    Id = 1,
                    CardNumber = Guid.NewGuid().ToString(),
                    CardPIN = 1111,
                    Validity = 10,
                    AccountId = Guid.NewGuid(),


                }
                };
    }
        [Fact]
        public void TestGetCardList()
        {
            var cardList = GetCardsData();

            cardRepository.Setup(x => x.GetAllCards()).Returns(cardList);

            var result = cardRepository.Object;
            var cardResult = result.GetAllCards().ToList();

            Assert.NotNull(cardResult);
            Assert.Equal(cardList.Count, cardResult.Count);
        }
  
    }
}
