using carnation_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace carnation_backend.Data
{
    public class CustomerDbContext : DbContext
    {
        public CustomerDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }
        public DbSet<Customer> Customers { get; set; }
    }
}
