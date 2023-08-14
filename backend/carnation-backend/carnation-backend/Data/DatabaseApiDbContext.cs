using carnation_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace carnation_backend.Data
{
    public class DatabaseApiDbContext : DbContext
    {
        public DatabaseApiDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Card> Cards { get; set; }  
        public DbSet<Transaction> Transactions { get; set; }
    }
}
