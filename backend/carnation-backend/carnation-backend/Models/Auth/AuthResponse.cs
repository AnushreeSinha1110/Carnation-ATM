namespace carnation_backend.Models.Auth
{
    public class AuthResponse
    {
        public string? UserName { get; set; }
        public string? Role { get; set; }
        public int? Cid { get; set; }
        public string? Token { get; set; }
    }
}
