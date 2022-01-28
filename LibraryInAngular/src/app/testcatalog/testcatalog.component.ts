import { Component, OnInit } from '@angular/core';
import { BookModel2 } from '../models/BookModel2';
import { BookService } from '../services/book.service';
import { WriterModel } from '../models/WriterModel';
import { BookWriterModel } from '../models/BookWriterModel';
import { UserAddressModel } from '../models/UserAddressModel';
import { BookAuthorModel } from '../models/BookAuthorModel';

@Component({
  selector: 'app-testcatalog',
  templateUrl: './testcatalog.component.html',
  styleUrls: ['./testcatalog.component.css']
})
export class TestcatalogComponent implements OnInit {
books:BookModel2[]=[];
writers: WriterModel[]=[];
bookWriters: BookWriterModel[]=[];
bookWritersById: BookWriterModel[]=[];
userAddresses: UserAddressModel[]=[];
bookAuthor: BookAuthorModel[]=[];

  constructor(
    private bookService: BookService
   ) { }

  ngOnInit(): void {
// this.bookService.getAllBook().subscribe(
//   (value)=> this.books=value
// );

// this.bookService.getAllWriter().subscribe(
// (value)=> this.writers=value
// );

// this.bookService.getBookWriter().subscribe(
// (value)=> this.bookWriters=value
// );  

// this.bookService.getUserAddress().subscribe(
// (value)=> this.userAddresses=value
// );

 this.bookService.getBookWriterById(1).subscribe(
 (value)=> this.bookWritersById=value
 );

this.bookService.getBookAuthor().subscribe(
(value)=> this.bookAuthor=value
);



  }
  }






