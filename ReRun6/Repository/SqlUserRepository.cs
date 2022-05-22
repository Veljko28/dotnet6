using Dapper;
using Microsoft.Data.SqlClient;
using ReRun6.Helpers;
using ReRun6.Models;
using ReRun6.Models.Requests;
using ReRun6.Models.Responses;
using ReRun6.Repository.Interfaces;
using System.Data;

namespace ReRun6.Repository
{
    public class SqlUserRepository : IUserRepository
    {
        private readonly ISqlDataAccess _db;

        public SqlUserRepository(ISqlDataAccess db)
        {
            _db = db;
        }

        public async Task<List<UserModel>> GetAllUsers()
        {
            return (await _db.LoadData<UserModel, dynamic>("dbo.spGetAllUsers", new { })).ToList();

        }

        public async Task<UserResponse> GetUserByIdAsync(string id)
        {
            UserModel user = (await _db.LoadData<UserModel, dynamic>("dbo.spUserById", new { })).FirstOrDefault();
            if (user == null)
            {
                throw new Exception("This user can't be found");
            }
            return Mapping.UserModelToResponse(user);

        }

        public async Task<bool> GivePoints(string id)
        {
            return await _db.SaveData<dynamic>("dbo.givePoints", new { userId = id });
        }

        public async Task<UserResponse> LoginUserAsync(LoginRequest req)
        {
            UserModel user = (await _db.LoadData<UserModel, dynamic>("dbo.spFindUser", new { req.UserName })).FirstOrDefault();
            if (user == null || !PasswordHashing.ComparePasswords(user.Password, req.Password))
            {
                throw new Exception("Cannot match the username and/or password to any user !");
            }
            return Mapping.UserModelToResponse(user);
        }

        public async Task<UserResponse> RegisterUserAsync(RegisterRequest req)
        {
            if ((req.ConfirmPassword != req.Password) || req.Password == "")
            {
                throw new Exception("The passwords don't match!");
            }

            List<UserModel> users = (await _db.LoadData<UserModel, dynamic>("dbo.GetAllUsers", new { })).ToList();


            if (users.Find(x => x.UserName == req.UserName) != null || req.UserName == "")
            {
                throw new Exception("The username is already taken!");
            }
            if (users.Find(x => x.Email == req.Email) != null || req.Email == "")
            {
                throw new Exception("The email is already in use!");
            }

            UserModel user = Mapping.RegisterRequestToUserModel(req);
            await _db.SaveData<dynamic>("dbo.spAddUser", 
                new { user.UserName, user.Email, 
                    Password = PasswordHashing.HashPassword(user.Password), Points = 0 });

            return Mapping.UserModelToResponse(user);
        }
    }
}
