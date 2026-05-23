using Microsoft.AspNetCore.Mvc;
using IdentityService.Models;
using IdentityService.Repositories;
using IdentityService.Services;
using BCrypt.Net;

namespace IdentityService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserRepository _repo;
        private readonly TokenGenerator _tokenGen;

        public AuthController(UserRepository repo, TokenGenerator tokenGen)
        {
            _repo = repo;
            _tokenGen = tokenGen;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterRequest request)
        {
            if (_repo.IsUserExists(request.Username, request.Email))
                return BadRequest(new { message = "Tên đăng nhập hoặc Email đã tồn tại!" });

            // Mã hóa mật khẩu trước khi lưu
            string passHash = BCrypt.Net.BCrypt.HashPassword(request.Password);

            if (_repo.CreateUser(request, passHash))
                return Ok(new { message = "Đăng ký thành công!" });

            return StatusCode(500, "Lỗi hệ thống khi tạo tài khoản.");
        }

        [HttpPost("login")]
        public IActionResult Login(LoginRequest request)
        {
            var user = _repo.GetUserCredentials(request.Username);

            // 1. Kiểm tra user có tồn tại không
            if (user.hashedPassword == null)
            {
                return Unauthorized(new { message = "Tài khoản hoặc mật khẩu không chính xác!" });
            }

            // 2. Kiểm tra mật khẩu có chính xác không (kiểm tra pass trước để bảo mật thông tin tài khoản bị khóa)
            if (!BCrypt.Net.BCrypt.Verify(request.Password, user.hashedPassword))
            {
                return Unauthorized(new { message = "Tài khoản hoặc mật khẩu không chính xác!" });
            }

            // 3. Kiểm tra trạng thái hoạt động (bị khóa hay hoạt động)
            if (user.status != 1)
            {
                return BadRequest(new { message = "Tài khoản của bạn đã bị khóa! Vui lòng liên hệ quản trị viên." });
            }

            // Tạo Token cho phiên làm việc
            string token = _tokenGen.GenerateToken(user.userId, request.Username, user.role);

            return Ok(new { token = token, userId = user.userId, message = "Đăng nhập thành công!" });
        }

        [HttpGet("user/{id}")]
        public IActionResult GetUserInfo(int id)
        {
            var user = _repo.GetUserById(id);
            if (user.username == null) return NotFound(new { message = "Không tìm thấy người dùng" });

            return Ok(new
            {
                username = user.username,
                email = user.email,
                joinDate = user.joinDate
            });
        }
        [HttpGet("users")]
        public IActionResult GetAllUsers()
        {
            var users = _repo.GetAllUsers();
            return Ok(users);
        }

        [HttpPost("delete-user/{id}")]
        public IActionResult DeleteUser(int id)
        {
            if (_repo.DeleteUser(id))
                return Ok(new { message = "Xóa người dùng thành công!" });

            return NotFound(new { message = "Không tìm thấy người dùng hoặc lỗi hệ thống." });
        }
        [HttpPut("user/{id}")]
        public IActionResult UpdateProfile(int id, [FromBody] UpdateProfileRequest request)
        {
            if (_repo.UpdateProfile(id, request.Username, request.Email))
                return Ok(new { message = "Cập nhật hồ sơ thành công!" });

            return BadRequest(new { message = "Tên đăng nhập hoặc Email đã tồn tại hoặc có lỗi xảy ra." });
        }

        [HttpPut("admin/user/{id}")]
        public IActionResult UpdateUserAdmin(int id, [FromBody] UpdateUserAdminRequest request)
        {
            int statusVal = request.Status.ToLower() == "active" ? 1 : 0;
            if (_repo.UpdateUserAdmin(id, request.Username, request.Email, request.Role, statusVal))
                return Ok(new { success = true, message = "Cập nhật thông tin người dùng thành công!" });

            return BadRequest(new { success = false, message = "Tên đăng nhập hoặc Email đã tồn tại hoặc có lỗi xảy ra." });
        }
    }

    public class UpdateUserAdminRequest
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string Status { get; set; }
    }

    public class UpdateProfileRequest
    {
        public string Username { get; set; }
        public string Email { get; set; }
    }
}