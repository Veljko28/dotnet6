using ReRun6.Models;
using ReRun6.Models.Requests;
using ReRun6.Models.Responses;

namespace ReRun6.Repository.Interfaces
{
    public interface IUserRepository
    {
        public Task<List<UserModel>> GetAllUsers();
        public Task<UserResponse> GetUserByIdAsync(string id);
        public Task<UserResponse> RegisterUserAsync(RegisterRequest req);
        public Task<TokenResponse> LoginUserAsync(LoginRequest req);

        public Task<bool> GivePoints(string id);

    }
}
