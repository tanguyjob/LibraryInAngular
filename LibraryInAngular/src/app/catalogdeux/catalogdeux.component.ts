import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookAuthorModel } from '../models/BookAuthorModel';
@Component({
  selector: 'app-catalogdeux',
  templateUrl: './catalogdeux.component.html',
  styleUrls: ['./catalogdeux.component.css']
})
export class CatalogdeuxComponent implements OnInit {
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
