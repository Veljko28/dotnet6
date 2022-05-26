using Microsoft.AspNetCore.Mvc;
using ReRun6.Helpers;
using ReRun6.Models.Requests;
using ReRun6.Repository.Interfaces;

namespace ReRun6.Controllers
{
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _products;

        public ProductController(IProductRepository products)
        {
            _products = products;
        }

        [HttpGet(ApiRoutes.ProductRoutes.GetAllProducts)]
        public async Task<IActionResult> GetAllProducts()
        {
            return Ok(await _products.GetAllProductsAsync());
        }

        [HttpPost(ApiRoutes.ProductRoutes.AddProduct)]
        public async Task<IActionResult> AddProduct([FromBody] ProductRequest req)
        {
            bool ok = await _products.AddProductAsync(req);
            return Ok(ok);
        }

        [HttpPost(ApiRoutes.ProductRoutes.TakeProduct)]
        public async Task<IActionResult> TakeProduct([FromRoute] string id)
        {
            bool ok = await _products.TakeProductAsync(id);
            return Ok(ok);
        }
    }
}
