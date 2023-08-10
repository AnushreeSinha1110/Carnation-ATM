
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
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            //builder.Services.AddDbContext<CustomerDbContext>(options => options.UseInMemoryDatabase("CustomersDb"));
            builder.Services.AddDbContext<DatabaseApiDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("CustomersApiCS")));// options.UseInMemoryDatabase("CustomersDb"));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}