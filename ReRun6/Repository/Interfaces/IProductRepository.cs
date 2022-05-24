using ReRun6.Models.Requests;

namespace ReRun6.Repository.Interfaces
{
    public interface IProductRepository
    {
        Task<bool> AddProductAsync(ProductRequest req);
        Task<bool> TakeProductAsync(string id);
        Task<bool> DeleteProductAsync(string id);
    }
}
