using ReRun6.Models;
using ReRun6.Models.Responses;

namespace ReRun6.Helpers
{
    public static class Mapping
    {
        public static UserResponse UserModelToResponse(UserModel user)
        {
            return new UserResponse()
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
                Points = user.Points
            };
        }

    }
}
