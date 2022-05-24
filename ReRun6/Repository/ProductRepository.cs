using ReRun6.Models.Requests;
using ReRun6.Repository.Interfaces;

namespace ReRun6.Repository
{
    public class ProductRepository : IProductRepository
    {
        public Task<bool> AddProductAsync(ProductRequest req)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteProductAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> TakeProductAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}
