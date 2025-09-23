using System.Text.Json;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class GridController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GridController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetGrid()
        {

            var gridEntities = await _context.Grid.ToListAsync();
            var result = gridEntities.Select(grid => new Grid
            {
                id = grid.id,
                columns = grid.columns

            }).ToList();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGrid([FromBody] Grid grid)
        {
            _context.Grid.Add(grid);
            await _context.SaveChangesAsync();
            return Ok(grid);
        }

         [HttpDelete]
        public async Task<IActionResult> DeleteGrid(int gridId)
        {
            Console.WriteLine($"Deleting grid with ID: {gridId}");
            var rows = await _context.Grid.Where(grid => grid.id == gridId).ExecuteDeleteAsync();
            return Ok(true);
        }
    }
}