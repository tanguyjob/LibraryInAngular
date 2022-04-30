import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BookAuthorService } from '../services/book-author.service';
import { BookModel } from '../models/BookModel';
import { Subscription, Subject } from 'rxjs';
import { Router} from '@angular/router';
//https://l-lin.github.io/angular-datatables/#/basic/angular-way
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject<any>();

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
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20
    };
      this.subscr = this.bookauthorService.getBook().subscribe(
        (value)=>
        {
        this.books=value;
        this.dtTrigger.next();
        }
        );
      }

  ngOnDestroy() {
    this.subscr.unsubscribe();
    this.dtTrigger.unsubscribe();
    }

}
