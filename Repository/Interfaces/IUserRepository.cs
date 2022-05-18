using ReRun6.Models.Requests;
using ReRun6.Models.Responses;

namespace ReRun6.Repository.Interfaces
{
    public interface IUserRepository
    {
        public Task<UserResponse> GetUserByIdAsync(string id);

        public Task<UserResponse> RegisterUserAsync(RegisterRequest req);
    }
}
