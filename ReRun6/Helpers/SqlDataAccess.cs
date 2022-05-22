using Dapper;
using System.Data;
using System.Data.SqlClient;

namespace ReRun6.Helpers
{
    public class SqlDataAccess : ISqlDataAccess
    {
        private readonly IConfiguration _config;

        public SqlDataAccess(IConfiguration config)
        {
            _config = config;
        }

        public async Task<IEnumerable<T>> LoadData<T, U>(string storeProcedure, U parameters, string connStr = "Default")
        {
            using IDbConnection db = new SqlConnection(_config.GetConnectionString(connStr));
            db.Open();
            return await db.QueryAsync<T>(storeProcedure, parameters, commandType: CommandType.StoredProcedure);
        }


        public async Task<bool> SaveData<T>(string storeProcedure, T parameters, string connStr = "Default")
        {
            using IDbConnection db = new SqlConnection(_config.GetConnectionString(connStr));
            db.Open();
            int rowsModified = await db.ExecuteAsync(storeProcedure, parameters, commandType: CommandType.StoredProcedure);
            return rowsModified > 0;
        }
    }
}
