using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace LibraryAPI.Models
{
    public partial class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public DateTime? DateBook { get; set; }
        public string Resume { get; set; }
        public bool ActiveBook { get; set; }
        public int FkBookLanguage { get; set; }
    }
}
