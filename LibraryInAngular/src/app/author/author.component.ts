import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../models/AuthorModel';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
authors: AuthorModel[]= [];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
     this.bookService.getAuthors().subscribe(
      (value)=> this.authors=value
    );
  }

}
