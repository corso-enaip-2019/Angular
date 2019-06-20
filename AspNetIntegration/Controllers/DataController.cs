using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AspNetIntegration.Controllers
{
    [Authorize]
    [RoutePrefix("api/data")]
    public class DataController : ApiController
    {
        [HttpGet]
        [Route("items")]
        public List<string> GetItems()
        {
            return new List<string>
            {
                User.Identity.Name,
                "Pippo",
                "Pluto",
                "Paperino",
                "Paperone",
                "Paperoga"
            };
        }
    }
}