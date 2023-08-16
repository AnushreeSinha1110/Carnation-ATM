using carnation_backend.Models.Auth;

namespace carnation_backend.Repository
{
    public interface IUserRepository
    {
        User? Validate(string username, string password);
        User? CreateUser(string username, string password, string role,int id);
        IEnumerable<User?> GetAllUser();
    }
}
