using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Intern4job.Web.Result
{
    public class ApiResult
    {
        public bool IsSuccess { set; get; }

        public string Message { set; get; }

        public Object Obj { set; get; }
    }
}