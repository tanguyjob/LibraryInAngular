import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/BookModel';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
books: BookModel[]= [];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      (value)=> this.books=value
    );
  }

}
