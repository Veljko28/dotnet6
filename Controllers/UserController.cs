using Microsoft.AspNetCore.Mvc;

namespace ReRun6.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;

        public UserController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public IActionResult GetUserById([FromRoute] string id)
        {
            return Ok();
        }
    }
}
