using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace carnation_backend.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public int Age { get; set; }
        public char Gender { get; set; }
        public string Phone { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; } = true;
        public List<Account> Accounts { get; set; }

    }
}
