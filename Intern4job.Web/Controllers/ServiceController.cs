using Intern4job.Web.Result;
using Intern4job.Web.Utility;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Intern4job.Web.Controllers
{
    public class ServiceController : Controller
    {
        //
        // GET: /Service/

        public ActionResult GetAllProfessions()
        {
            string queryUrl = "http://127.0.0.1:8001/api/Professions";

            HttpClientHelper client = new HttpClientHelper();
            client.Url = queryUrl;
            client.Verb = HttpVerb.GET;
            string jsonString = client.GetString();

            ApiResult apiResultObj = JsonConvert.DeserializeObject<ApiResult>(jsonString);

            string objStr = JsonConvert.SerializeObject(apiResultObj.Obj);

            return new JsonResult() { ContentType = "text/html", JsonRequestBehavior = JsonRequestBehavior.AllowGet, Data = new { IsSuccess = apiResultObj.IsSuccess, Message = apiResultObj.Message, Obj = objStr } };
        }

    }
}
