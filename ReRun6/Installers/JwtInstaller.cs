using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using ReRun6.Helpers.Jwt;
using System.Text;

namespace ReRun6.Installers
{
	public class JwtInstaller : IInstaller
	{
		public void InstallServices(IConfiguration configuration, IServiceCollection services)
		{
			var JwtSettings = new JwtSettings();
			configuration.Bind(nameof(JwtSettings), JwtSettings);

			services.AddSingleton(JwtSettings);

			var tokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuerSigningKey = true,
				IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(JwtSettings.Secret)),
				ValidateIssuer = false,
				ValidateAudience = false,
				RequireExpirationTime = false,
				ValidateLifetime = true,
				ClockSkew = TimeSpan.Zero
			};

			services.AddAuthentication(x =>
			{
				x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

			}).AddJwtBearer("Bearer", x => {
				x.SaveToken = true;
				x.RequireHttpsMetadata = false;
				x.TokenValidationParameters = tokenValidationParameters;
			});

			// Add Policy for claims and use it insted of CheckRole

			services.AddAuthorization(options =>
			{
				options.AddPolicy("Administration", builder =>
				{
					builder.RequireClaim("adn", "true");
				});

				options.AddPolicy("Managment", builder =>
				{
					builder.RequireClaim("mng", "true");
				});

			});
		}
	}
}
