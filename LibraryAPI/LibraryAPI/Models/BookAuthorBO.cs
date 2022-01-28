using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryAPI.Models
{
    public class BookAuthorBO
    {
        [Key]
        public int BookId { get; set; }

        public String Title { get; set; }

        public String Resume { get; set; }

        public Boolean ActiveBook { get; set; }

        public int FK_Book_Language { get; set; }

        public int AuthorId { get; set; }

        public string Name { get; set; }

        public string Firstname { get; set; }

        public DateTime? BirthDate { get; set; }

        public bool IsActive { get; set; }


    }
}
