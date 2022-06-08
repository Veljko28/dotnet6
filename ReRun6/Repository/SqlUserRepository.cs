using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using ReRun6.Helpers;
using ReRun6.Helpers.Jwt;
using ReRun6.Models;
using ReRun6.Models.Requests;
using ReRun6.Models.Responses;
using ReRun6.Repository.Interfaces;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ReRun6.Repository
{
    public class SqlUserRepository : IUserRepository
    {
        private readonly ISqlDataAccess _db;
        private readonly JwtSettings _jwtSettings;

        public SqlUserRepository(ISqlDataAccess db, JwtSettings jwtSettings)
        {
            _db = db;
            _jwtSettings = jwtSettings;
        }

        public async Task<List<UserModel>> GetAllUsers()
        {
            return (await _db.LoadData<UserModel, dynamic>("dbo.spGetAllUsers", new { })).ToList();

        }

        public async Task<UserResponse> GetUserByIdAsync(string username)
        {
            UserModel user = (await _db.LoadData<UserModel, dynamic>("dbo.spFindUser", new { UserName = username })).FirstOrDefault();
            if (user == null)
            {
                throw new Exception("This user can't be found");
            }
            return Mapping.UserModelToResponse(user);

        }

        public async Task<bool> GivePoints(string id)
        {
            return await _db.SaveData<dynamic>("dbo.spGivePoints", new { userId = id });
        }

        public async Task<TokenResponse> LoginUserAsync(LoginRequest req)
        {
            UserModel user = (await _db.LoadData<UserModel, dynamic>("dbo.spFindUser", new { req.UserName })).FirstOrDefault();
            if (user == null || !PasswordHashing.ComparePasswords(user.Password, req.Password))
            {
                throw new Exception("Cannot match the username and/or password to any user !");
            }

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

            byte[] key = Encoding.ASCII.GetBytes(_jwtSettings.Secret);

            List<Claim> roleClaims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("id", user.Id),
            };


            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(roleClaims),
                Expires = DateTime.UtcNow.Add(_jwtSettings.TokenLifetime),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return new TokenResponse()
            {
                Token = tokenHandler.WriteToken(token),
                Expires = DateTime.UtcNow.Add(_jwtSettings.TokenLifetime).ToString() // 4 days long token
            };
        }

        public async Task<UserResponse> RegisterUserAsync(RegisterRequest req)
        {
            if ((req.ConfirmPassword != req.Password) || req.Password == "")
            {
                throw new Exception("The passwords don't match!");
            }

            List<UserModel> users = (await _db.LoadData<UserModel, dynamic>("dbo.spGetAllUsers", new { })).ToList();


            if (users.Find(x => x.UserName == req.UserName) != null || req.UserName == "")
            {
                throw new Exception("The username is already taken!");
            }
            if (users.Find(x => x.Email == req.Email) != null || req.Email == "")
            {
                throw new Exception("The email is already in use!");
            }

            UserModel user = Mapping.RegisterRequestToUserModel(req);
            user.Id = Guid.NewGuid().ToString();
            await _db.SaveData<dynamic>("dbo.spAddUser", 
                new { user.Id, user.UserName, user.Email, 
                    Password = PasswordHashing.HashPassword(user.Password), Points = 0, user.UntilPoints});

            return Mapping.UserModelToResponse(user);
        }
    }
}
