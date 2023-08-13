using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace carnation_backend.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public int Phone { get; set; }
        public List<Account> Accounts { get; set; }

    }
}
