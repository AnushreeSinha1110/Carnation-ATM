using carnation_backend.Models;

namespace carnation_backend.DAOs
{
    public class CardRequestDAO
    {
        public string CardNumber { get; set; }
        public int CardPIN { get; set; }
        public int Validity { get; set; }

        public Guid AccountId { get; set; }
        public Account Account { get; set; }

    }
}
