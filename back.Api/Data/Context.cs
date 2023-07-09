using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace back.Api.Data
{
    public class Context : IdentityDbContext
    {
        public Context(DbContextOptions options) : base(options) { }
    }
}
