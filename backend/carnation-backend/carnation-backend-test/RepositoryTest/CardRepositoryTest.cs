using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Repository;
using Microsoft.EntityFrameworkCore;
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
        private DbContextOptions<DatabaseApiDbContext> dbContextOptions;
        private DatabaseApiDbContext db;
        private ICardRepository? cardRepository;

        public CardRepositoryTest()
        {
            var dbName = Constants.ConnectionString;
            dbContextOptions = new DbContextOptionsBuilder<DatabaseApiDbContext>().UseSqlServer(dbName).Options;
            db = new DatabaseApiDbContext(dbContextOptions);
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
            cardRepository = new CardRepository(db);

            var cards = cardRepository.GetAllCards();

            Assert.NotNull(cards);
            Assert.IsAssignableFrom<IEnumerable<Card>>(cards);
        }
  
    }
}
