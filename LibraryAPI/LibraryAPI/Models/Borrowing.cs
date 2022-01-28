using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace LibraryAPI.Models
{
    public partial class Borrowing
    {
        public int BorrowingId { get; set; }
        public DateTime DateBegin { get; set; }
        public DateTime DateBack { get; set; }
        public bool Additional { get; set; }
        public int FkBorrowingCopy { get; set; }
        public int FkBorrowingUser { get; set; }
    }
}
