
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class GridColumn
    {
                public int columnNum { get; set; }
        public string duration { get; set; }
        public List<string> notes { get; set; }
    }
}
