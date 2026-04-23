using IdentityService.Repositories;
using IdentityService.Services;

namespace IdentityService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Đăng ký Repository và Service
            builder.Services.AddScoped<UserRepository>();
            builder.Services.AddScoped<TokenGenerator>();

            // Cấu hình CORS để cho phép React (Frontend) truy cập API
            builder.Services.AddCors(options => {
                options.AddPolicy("AllowReact", policy => {
                    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });

            var app = builder.Build();


            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();


            app.UseCors("AllowReact");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}