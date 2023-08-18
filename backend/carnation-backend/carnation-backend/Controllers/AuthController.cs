using carnation_backend.DAOs;
using carnation_backend.Models.Auth;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace carnation_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IUserRepository userRepository;
        IConfiguration configuration;

        public AuthController(IConfiguration configuration, IUserRepository userRepository)
        {
            this.configuration = configuration;
            this.userRepository = userRepository;
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult<AuthResponse> Auth(AuthRequest request)
        {
            AuthResponse response = null;

            var user = userRepository.Validate(request.UserName, request.Password);
            
            if (user == null)
            {
                return NotFound();
            }
            
            if (user != null)
            {
                string jwtToken = GetToken(user);
                response = new AuthResponse()
                {
                    UserName = user.UserName,
                    Role = user.Role,
                    Token = jwtToken,
                    Cid=user.Cid
                    
                };
            }

            return Ok(response);
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("/createUser")]
        public ActionResult<User?> CreateUser(AuthDAO newuser)
        {
            var user = userRepository.CreateUser(newuser.UserName, newuser.Password, newuser.Role,newuser.Cid);
            return Ok(user);
        }

        private string GetToken(User? user)
        {
            var issuer = configuration["Jwt:Issuer"];
            var audience = configuration["Jwt:Audience"];
            var key = Encoding.UTF8.GetBytes(configuration["Jwt:Key"]);
            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature);

            var subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, user.Role),
            });

            var expiers = DateTime.UtcNow.AddMinutes(10);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = subject,
                Expires = expiers,
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = signingCredentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);

            return jwtToken;


        }
    }
}
