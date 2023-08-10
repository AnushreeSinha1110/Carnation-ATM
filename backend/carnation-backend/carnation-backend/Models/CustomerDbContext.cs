using Microsoft.EntityFrameworkCore;

namespace carnation_backend.Models
{
    public class CustomerDbContext : DbContext
    {
        public CustomerDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions) 
        {

        } 
        public DbSet<Customer> Customers { get; set; }
    }
}
