using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace LibraryAPI.Models
{
    public partial class Copy
    {
        public int CopyId { get; set; }
        public int FkCopyBook { get; set; }
        public int FkCopyLibrary { get; set; }
    }
}
