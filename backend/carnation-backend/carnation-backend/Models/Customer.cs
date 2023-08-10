using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace carnation_backend.Models
{
    public class Customer
    {
        [Key]
        public int cid { get; set; }
        public string name { get; set; }
        public string addr { get; set; }
        public int age { get; set; }
        public int phone { get; set; }

    }
}
