﻿using Login.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Login.Services
{
    public interface ILoginService
    {
        Task<UserModel> Login(string email, string password);
    }
}
