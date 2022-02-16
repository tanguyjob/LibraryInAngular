import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorModel } from '../models/AuthorModel';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
authors: AuthorModel[]= [];
subscr!: Subscription;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
     this.subscr=this.bookService.getAuthors().subscribe(
      (value)=> this.authors=value
    );
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }

}
