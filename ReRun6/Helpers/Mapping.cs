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
                Points = user.Points,
                UntilFreePoints = user.UntilPoints
            };
        }

        public static UserModel RegisterRequestToUserModel(RegisterRequest req)
        {
            return new UserModel()
            {
                UserName = req.UserName,
                Email = req.Email,
                Password = req.Password,
                Points = 0,
                UntilPoints = DateTime.Now.AddMinutes(10)
            };
        }

    }
}
