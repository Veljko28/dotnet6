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

        public bool GivePoints(string id)
        {
            throw new NotImplementedException();
        }

        public Task<UserResponse> LoginUserAsync(LoginRequest req)
        {
            throw new NotImplementedException();
        }

        public Task<UserResponse> RegisterUserAsync(RegisterRequest req)
        {
            throw new NotImplementedException();
        }
    }
}
