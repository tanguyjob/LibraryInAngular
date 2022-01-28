﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace LibraryAPI.Models
{
    public partial class Author
    {
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public string Firstname { get; set; }
        public DateTime? Birthdate { get; set; }
        public bool IsActive { get; set; }
    }
}
