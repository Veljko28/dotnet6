namespace ReRun6.Helpers
{
    public static class ApiRoutes
    {
        public const string root = "/api";
        public const string version = "/v1";
       static class UserRoutes
       {
            public const string parent = "/user";
            public const string GetUserById = root + version + parent + "/{id}";
       }

    }
}
