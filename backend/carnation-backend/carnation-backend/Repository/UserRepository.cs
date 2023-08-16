using carnation_backend.Data;
using carnation_backend.Models.Auth;

namespace carnation_backend.Repository
{
    public class UserRepository : IUserRepository
    {
        public readonly DatabaseApiDbContext databaseApiDbContext;

        public UserRepository(DatabaseApiDbContext databaseApiDbContext)
        {
            this.databaseApiDbContext = databaseApiDbContext;
        }

        public User? CreateUser(string username, string password, string role,int id)
        {
            var user = new User
            {
                UserName = username,
                Password = password,
                Role = role,
                Cid=id
            };

            databaseApiDbContext.Users.Add(user);
            databaseApiDbContext.SaveChanges();

            return databaseApiDbContext.Users.FirstOrDefault(u => u.UserName == username);
        }

        public IEnumerable<User?> GetAllUser()
        {
            return databaseApiDbContext.Users.ToList();
        }

        public User? Validate(string username, string password)
        {
            return databaseApiDbContext.Users.SingleOrDefault(u => u.UserName == username && u.Password == password);
        }
    }
}
