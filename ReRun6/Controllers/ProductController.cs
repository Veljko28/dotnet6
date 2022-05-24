using Microsoft.AspNetCore.Mvc;
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
    }
}
