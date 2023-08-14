
using carnation_backend.Data;
using carnation_backend.Repository;
using Microsoft.EntityFrameworkCore;

namespace carnation_backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddScoped<IAccountRepository, AccountRepository>();
            builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
            builder.Services.AddScoped<ICardRepository, CardRepository>();
            builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            //builder.Services.AddDbContext<CustomerDbContext>(options => options.UseInMemoryDatabase("CustomersDb"));
            builder.Services.AddDbContext<DatabaseApiDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("CustomersApiCS")));// options.UseInMemoryDatabase("CustomersDb"));

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

            app.UseCors(policyName);

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}