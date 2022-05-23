using ReRun6.Helpers;
using ReRun6.Models;
using ReRun6.Models.Requests;
using ReRun6.Models.Responses;
using ReRun6.Repository.Interfaces;

namespace ReRun6.Repository
{
    public class UserRepository : IUserRepository
    {
        // temp list of users
        public static List<UserModel> users = new List<UserModel>()
        {
            new UserModel(){ Id = "1", UserName = "Test1", Email = "test1@gmail.com", Password = "Test1pass", Points = 11 },
            new UserModel(){ Id = "2", UserName = "Test2", Email = "test2@gmail.com", Password = "Test2pass", Points = 12 },
            new UserModel(){ Id = "3", UserName = "Test3", Email = "test3@gmail.com", Password = "Test3pass", Points = 13 },
            new UserModel(){ Id = "4", UserName = "Test4", Email = "test4@gmail.com", Password = "Test4pass", Points = 14 },
            new UserModel(){ Id = "5", UserName = "Test5", Email = "test5@gmail.com", Password = "Test5pass", Points = 15 },
        };

        public async Task<List<UserModel>> GetAllUsers()
        {
            return users;
        }

        // no need of async
        public async Task<UserResponse> GetUserByIdAsync(string id)
        {
            UserModel user = users.Find(x => x.Id == id);
            if (user == null)
            {
                return null;
            }

            return Mapping.UserModelToResponse(user);
        }

        public async Task<bool> GivePoints(string id)
        {
            bool ok = false;
            foreach (UserModel user in users)
            {
                if (user.Id == id)
                {
                    user.Points += 5;
                    ok = true;
                    break;
                }
            }
            return ok;
        }

        public async Task<TokenResponse> LoginUserAsync(LoginRequest req)
        {
            UserModel user = users.Find(x => x.UserName == req.UserName);
            if ((user == null) || user.Password != req.Password)
            {
                throw new Exception("Cannot match the username and/or password to any user !");
            }
            else return new TokenResponse()
            {
                Token = "Login Successful !",
                Expires = "Never"
            };
        }

        public async Task<UserResponse> RegisterUserAsync(RegisterRequest req)
        {
            if ((req.ConfirmPassword != req.Password) || req.Password == "")
            {
                throw new Exception("The passwords don't match!");
            }
            if (users.Find(x => x.UserName == req.UserName) != null || req.UserName == "")
            {
                throw new Exception("The username is already taken!");
            }
            if (users.Find(x => x.Email == req.Email) != null || req.Email == "")
            {
                throw new Exception("The email is already in use!");
            }

            req.Id = Guid.NewGuid().ToString();
            req.Points = 0;

            UserModel user = Mapping.RegisterRequestToUserModel(req);
            users.Add(user);

            return Mapping.UserModelToResponse(user);
        }

    }
}
