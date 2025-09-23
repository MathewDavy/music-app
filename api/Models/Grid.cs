
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Grid
    {
        [Key]
        public int id { get; set; }
        public ICollection<GridColumn> columns { get; set; }
        // public GridColumn column2 { get; set; }
        // public GridColumn column3 { get; set; }
        // public GridColumn column4 { get; set; }


    }
}
