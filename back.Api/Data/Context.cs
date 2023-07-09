using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace back.Api.Data
{
    public class Context : IdentityDbContext
    {
        public Context(){}
        public Context(DbContextOptions<Context> options) : base(options){}
    }
}