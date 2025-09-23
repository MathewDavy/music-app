using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Grid>().OwnsMany(grid => grid.columns, builder => builder.ToJson());
        }

        public DbSet<Grid> Grid { get; set; }
    }
}
