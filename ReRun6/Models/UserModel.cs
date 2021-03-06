namespace ReRun6.Models
{
    public class UserModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Points { get; set; } = 0;
        public DateTime UntilPoints { get; set; }
    }
}
