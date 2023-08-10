using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace carnation_backend.Models
{
    public class Card
    {
        public int cnum { get; set; }
        public int cpin { get; set; }
        public DateOnly exp { get; set; }
        [ForeignKey("Account")]
        public Guid aidFK { get; set; }
    }
}
