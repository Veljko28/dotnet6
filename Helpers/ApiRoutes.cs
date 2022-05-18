namespace ReRun6.Helpers
{
    public static class ApiRoutes
    {
        public const string root = "/api";
        public const string version = "/v1";
       public static class UserRoutes
       {
            public const string parent = "/user";
            public const string GetUserById = root + version + parent + "/{id}";
            public const string Register = root + version + parent + "/register";
        }

    }
}
