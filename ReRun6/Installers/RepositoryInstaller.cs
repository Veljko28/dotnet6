using ReRun6.Helpers;
using ReRun6.Repository;
using ReRun6.Repository.Interfaces;

namespace ReRun6.Installers
{
    public class RepositoryInstaller : IInstaller
    {
        public void InstallServices(IConfiguration configuration, IServiceCollection services)
        {
            services.AddScoped<IUserRepository, SqlUserRepository>();
            services.AddSingleton<IProductRepository, ProductRepository>();
            services.AddSingleton<ISqlDataAccess, SqlDataAccess>();
        }
    }
}
