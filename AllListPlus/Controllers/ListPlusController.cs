using Microsoft.AspNetCore.Mvc;

namespace AllListPlus.Controllers
{
    public class ListPlusController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
