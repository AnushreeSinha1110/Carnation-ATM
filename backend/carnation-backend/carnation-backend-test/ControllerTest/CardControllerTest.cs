using carnation_backend.Controllers;
using carnation_backend.Models;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace carnation_backend_test.ControllerTest
{
    public class CardControllerTest
    {
        private readonly Mock<ICardRepository> cardRepository;
        private readonly CardController cardController;
        private readonly Mock<IAccountRepository> accountRepository;

        public CardControllerTest()
        {
            this.cardRepository = new Mock<ICardRepository>();
            this.accountRepository = new Mock<IAccountRepository>();
            this.cardController = new CardController(cardRepository.Object,accountRepository.Object);
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
                },
                new Card
                {
                    Id =2,
                    CardNumber = Guid.NewGuid().ToString(),
                    CardPIN = 1010,
                    Validity = 7,
                    AccountId = Guid.NewGuid(),
                },
                new Card
                {
                    Id = 3,
                    CardNumber = Guid.NewGuid().ToString(),
                    CardPIN = 5050,
                    Validity =9,
                    AccountId = Guid.NewGuid(),
                }
            };
        }
        [Fact]
        public void GetAllTestSuccess()
        {
            var cardList = GetCardsData();
            cardRepository.Setup(x => x.GetAllCards()).Returns(cardList);

            var result = cardController.GetCards();
            var okresult = Assert.IsType<OkObjectResult>(result);
            var cards = Assert.IsType<List<Card>>(okresult.Value);

            Assert.Equal(cardList.Count, cards.Count);
        }
    }
}
