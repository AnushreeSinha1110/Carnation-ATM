using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace carnation_backend.Models
{
    public class Card
    {
        [Key]
        public int cnum { get; set; }
        public int cpin { get; set; }
        public DateTime exp { get; set; }
        [ForeignKey("Account")]
        public Guid aidFK { get; set; }
    }
}
