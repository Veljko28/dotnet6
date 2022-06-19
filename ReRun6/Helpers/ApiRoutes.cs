namespace ReRun6.Helpers
{
    public static class ApiRoutes
    {
        private const string root = "/api";
        private const string version = "/v1";
       public static class UserRoutes
       {
            public const string parent = "/user";
            public const string GetAllUsers = root + version + parent + "/all";
            public const string GetUserById = root + version + parent + "/{username}";
            public const string Register = root + version + parent + "/register";
            public const string Login = root + version + parent + "/login";
            public const string GivePoints = root + version + parent + "/points/{id}";
        }
        

        public static class ProductRoutes
        {
            public const string parent = "/product";
            public const string GetAllProducts = root + version + parent + "/all";
            public const string AddProduct = root + version + parent + "/add";
            public const string TakeProduct = root + version + parent + "/take/{id}";

        }

    }
}
