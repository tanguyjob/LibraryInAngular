using LibraryAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LibraryController : Controller
    {
       

        [HttpGet]
        [ActionName("Books")]
        public IEnumerable<Book> Books()
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.Book.ToList();
            }
        }

        [HttpGet]
        [ActionName("Addresses")]
        public IEnumerable<Address> Addresses()
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.Address.ToList();
            }
        }

        [HttpGet]
        [ActionName("Authors")]
        public IEnumerable<Author> Authors()
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.Author.ToList();
            }
        }

        //https://localhost:44310/api/Library/Book?id=2
        [HttpGet]
        [ActionName("Book")]
        public Book Book(int id)
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.Book.Where(x => x.BookId.Equals(id)).FirstOrDefault();
            }
        }
        //https://localhost:44308/api/Book/item?id=1
        [HttpGet]
        [ActionName("Language")]
        public Language Language(int id)
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.Language.Where(x => x.LanguageId.Equals(id)).FirstOrDefault();
            }
        }

        [HttpGet]
        [ActionName("Address")]
        public Address Address(int id)
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.Address.Where(x => x.AddressId.Equals(id)).FirstOrDefault();
            }
        }

        [HttpGet]
        [ActionName("Author")]
        public Author Author(int id)
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.Author.Where(x => x.AuthorId.Equals(id)).FirstOrDefault();
            }
        }


        [HttpGet]
        [ActionName("ProcedureBookAuthor")]
        public IEnumerable<BookAuthorBO> ProcedureBookAuthor()
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.BookAuthorCustom.FromSqlRaw("[dbo].[SelectAllBookAuthor]").ToListAsync().Result;
            }
        }

        //https://localhost:44334/api/Library/ProcedureBookAuthorById?id=3
        [HttpGet]
        [ActionName("ProcedureBookAuthorById")]
        public IEnumerable<BookAuthorBO> ProcedureBookAuthorById(int id)
        {
            using (var context = new LibraryDatabaseContext())
            {
                return context.BookAuthorCustom.FromSqlRaw("[dbo].[SelectAllBookAuthorByBookId] {0}", id).ToListAsync().Result;
            }
        }



    }
}
