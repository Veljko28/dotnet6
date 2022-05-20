using ReRun6.Models;
using ReRun6.Models.Requests;
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

        public static UserModel RegisterRequestToUserModel(RegisterRequest req)
        {
            return new UserModel()
            {
                Id = req.Id,
                UserName = req.UserName,
                Email = req.Email,
                Password = req.Password,
                Points = req.Points
            };
        }

    }
}
