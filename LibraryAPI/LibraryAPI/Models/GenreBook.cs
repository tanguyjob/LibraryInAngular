using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace LibraryAPI.Models
{
    public partial class GenreBook
    {
        public int GenreId { get; set; }
        public int BookId { get; set; }
    }
}
