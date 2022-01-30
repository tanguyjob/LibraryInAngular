import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookAuthorModel } from '../models/BookAuthorModel';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
bookAuthors: BookAuthorModel[]= [];
  constructor(
    private bookService: BookService
  ) { }
 
 
  ngOnInit(): void { 
     this.bookService.getBookAuthor().subscribe(
      (value)=> this.bookAuthors=value
    );
  }

}
