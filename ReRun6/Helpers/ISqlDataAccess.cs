namespace ReRun6.Helpers
{
    public interface ISqlDataAccess
    {
        Task<IEnumerable<T>> LoadData<T, U>(string storeProcedure, U parameters, string connStr = "Default");
        Task<bool> SaveData<T>(string storeProcedure, T parameters, string connStr = "Default");
    }
}