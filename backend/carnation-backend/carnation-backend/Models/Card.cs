using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace carnation_backend.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string CardNumber { get; set; }
        public int CardPIN { get; set; }
        public int Validity { get; set; }
        
        public Guid AccountId { get; set; }
        public Account Account { get; set; }
    }
}
