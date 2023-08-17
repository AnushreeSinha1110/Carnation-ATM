
using carnation_backend.Data;
using carnation_backend.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace carnation_backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles); ;

            builder.Services.AddScoped<IAccountRepository, AccountRepository>();
            builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
            builder.Services.AddScoped<ICardRepository, CardRepository>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
                    ValidateIssuer = true,
                    ValidateLifetime = false,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true
                };
            });
            
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            //builder.Services.AddDbContext<CustomerDbContext>(options => options.UseInMemoryDatabase("CustomersDb"));
            builder.Services.AddDbContext<DatabaseApiDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("CustomersApiCS")));// options.UseInMemoryDatabase("CustomersDb"));

            builder.Services.AddAutoMapper(typeof(Program).Assembly);
            var policyName = "_myAllowSpecificOrigins";
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: policyName,
                                  builder =>
                                  {
                                      builder
                                        .WithOrigins("http://localhost:3000") // specifying the allowed origin
                                        .WithMethods("GET") // defining the allowed HTTP method
                                        .WithMethods("POST")
                                        .WithMethods("PUT")
                                        .WithMethods("DELETE")
                                        .AllowAnyHeader(); // allowing any header to be sent
                                  });
            });
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthentication();
            app.UseCors(policyName);

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}