using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace LibraryAPI.Models
{
    public partial class LibraryDatabaseContext : DbContext
    {
        public LibraryDatabaseContext()
        {
        }

        public LibraryDatabaseContext(DbContextOptions<LibraryDatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<BookAuthorBO> BookAuthorCustom { get; set; }
        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Author> Author { get; set; }
        public virtual DbSet<Book> Book { get; set; }
        public virtual DbSet<BookAuthor> BookAuthor { get; set; }
        public virtual DbSet<Borrowing> Borrowing { get; set; }
        public virtual DbSet<Copy> Copy { get; set; }
        public virtual DbSet<Genre> Genre { get; set; }
        public virtual DbSet<GenreBook> GenreBook { get; set; }
        public virtual DbSet<Language> Language { get; set; }
        public virtual DbSet<Library> Library { get; set; }
        public virtual DbSet<Profile> Profile { get; set; }
        public virtual DbSet<Subscription> Subscription { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\MSSQLSERVER01;Database=LibraryDatabase;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.Property(e => e.Box)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Number)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PostCode)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Street)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Author>(entity =>
            {
                entity.Property(e => e.Birthdate).HasColumnType("date");

                entity.Property(e => e.Firstname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.Property(e => e.DateBook).HasColumnType("date");

                entity.Property(e => e.FkBookLanguage).HasColumnName("FK_Book_Language");

                entity.Property(e => e.Resume)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<BookAuthor>(entity =>
            {
                entity.HasKey(e => new { e.BookId, e.AuthorId });
            });

            modelBuilder.Entity<Borrowing>(entity =>
            {
                entity.Property(e => e.DateBack).HasColumnType("date");

                entity.Property(e => e.DateBegin).HasColumnType("date");

                entity.Property(e => e.FkBorrowingCopy).HasColumnName("FK_Borrowing_Copy");

                entity.Property(e => e.FkBorrowingUser).HasColumnName("FK_Borrowing_User");
            });

            modelBuilder.Entity<Copy>(entity =>
            {
                entity.Property(e => e.FkCopyBook).HasColumnName("FK_Copy_Book");

                entity.Property(e => e.FkCopyLibrary).HasColumnName("FK_Copy_Library");
            });

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.Property(e => e.NameGenre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<GenreBook>(entity =>
            {
                entity.HasKey(e => new { e.GenreId, e.BookId });
            });

            modelBuilder.Entity<Language>(entity =>
            {
                entity.Property(e => e.NameLanguage)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Library>(entity =>
            {
                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.District)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NameLibrary)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Profile>(entity =>
            {
                entity.Property(e => e.ProfileName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Subscription>(entity =>
            {
                entity.Property(e => e.NameProfile)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FkUserAddress).HasColumnName("FK_User_Address");

                entity.Property(e => e.FkUserProfile).HasColumnName("FK_User_Profile");

                entity.Property(e => e.FkUserSuscription).HasColumnName("FK_User_Suscription");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
