using ReRun6.Helpers;
using ReRun6.Models;
using ReRun6.Models.Requests;
using ReRun6.Repository.Interfaces;

namespace ReRun6.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly ISqlDataAccess _db;

        public ProductRepository(ISqlDataAccess db)
        {
            _db = db;
        }
        public async Task<bool> AddProductAsync(ProductRequest req)
        {
            return await _db.SaveData<dynamic>("dbo.spAddProduct", new { req.Name, req.Image, req.Amount, req.Cost, req.Description });
        }

        public async Task<bool> DeleteProductAsync(string id)
        {
            return await _db.SaveData<dynamic>("dbo.spDeleteProduct", new { productId = id });
        }

        public async Task<IEnumerable<ProductModel>> GetAllProductsAsync()
        {
            return await _db.LoadData<ProductModel,dynamic>("dbo.spGetAllProducts", new { });
        }

        public async Task<bool> TakeProductAsync(string id)
        {
            ProductModel product = (await _db.LoadData<ProductModel,dynamic>("dbo.spTakeProduct", new {productId = id})).FirstOrDefault();
            if (product == null)
            {
                throw new Exception("Cannot find a product with this id !");
            }
            if (product.Amount > 0)
            {
                return await _db.SaveData<dynamic>("dbo.spTakeProduct", new { productId = id });
            }
            else throw new Exception("There is no more products of this type left !");
        }
    }
}
