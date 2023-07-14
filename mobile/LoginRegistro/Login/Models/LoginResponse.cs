using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Login.Models
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public bool Result { get; set; }
        public List <Task>Errors { get; set; }
    }
}
