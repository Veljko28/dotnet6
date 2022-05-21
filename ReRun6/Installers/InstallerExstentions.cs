namespace ReRun6.Installers
{
    public static class InstallerExstentions
    {
		public static void InstallServicesInAssembly(this IServiceCollection services, IConfiguration Configuration)
		{
			var installers = typeof(Program).Assembly.ExportedTypes.Where(x => typeof(IInstaller).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
					  .Select(Activator.CreateInstance).Cast<IInstaller>().ToList();

			foreach (var installer in installers)
			{
				installer.InstallServices(Configuration, services);
			}
		}
	}
}
