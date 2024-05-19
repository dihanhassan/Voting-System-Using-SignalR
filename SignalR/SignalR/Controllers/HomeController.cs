using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR.Hubs;
using SignalR.Models;
using System.Diagnostics;

namespace SignalR.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IHubContext<VoteSystem> _hubContext;
        public HomeController(ILogger<HomeController> logger, IHubContext<VoteSystem> hubContext )
        {
            _logger = logger;
            _hubContext = hubContext;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public async Task<IActionResult> VoteUser(string type)
        {
            if (SD.VoteCountMapper.ContainsKey(type))
            {
                SD.VoteCountMapper[type]++;
            }
            await _hubContext.Clients.All.SendAsync("updateTotalVoteCount", SD.VoteCountMapper[SD.Tom], SD.VoteCountMapper[SD.Jerry]);
            return Ok();
        }


    }
}
