using Microsoft.AspNetCore.Mvc;
using ReRun6.Helpers;
using ReRun6.Models.Requests;
using ReRun6.Models.Responses;
using ReRun6.Repository.Interfaces;

namespace ReRun6.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly IUserRepository _userRepository;

        public UserController(IConfiguration config, IUserRepository userRepository)
        {
            _config = config;
            _userRepository = userRepository;
        }

        [HttpGet(ApiRoutes.UserRoutes.GetAllUsers)]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(_userRepository.GetAllUsers());
        }

        [HttpGet(ApiRoutes.UserRoutes.GetUserById)]
        public async Task<IActionResult> GetUserById([FromRoute] string id)
        {
            UserResponse user = await _userRepository.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost(ApiRoutes.UserRoutes.Register)]
        public async Task<IActionResult> Register([FromBody] RegisterRequest req)
        {
            try
            {
                UserResponse user = await _userRepository.RegisterUserAsync(req);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(ApiRoutes.UserRoutes.Login)]
        public async Task<IActionResult> Login([FromBody] LoginRequest req)
        {
            try
            {
                UserResponse user = await _userRepository.LoginUserAsync(req);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(ApiRoutes.UserRoutes.GivePoints)]
        public async Task<IActionResult> GivePoints([FromRoute] string id)
        {
            bool ok = _userRepository.GivePoints(id);
            return Ok(ok);
        }
    }
}
