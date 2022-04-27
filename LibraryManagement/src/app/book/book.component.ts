import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookAuthorService } from '../services/book-author.service';
import { BookModel } from '../models/BookModel';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  subscr!: Subscription;
  books:BookModel[]=[];
  constructor(
    private bookauthorService: BookAuthorService,
    private router: Router
    ) { }

  create() {
      this.router.navigate(['create-book']);
      }
  bind() {
      this.router.navigate(['book-author']);
      }

  ngOnInit(): void {
      this.subscr = this.bookauthorService.getBook().subscribe(
        (value)=>this.books=value
        );
      }

  ngOnDestroy() {
    this.subscr.unsubscribe();
    }

}
