import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookAuthorService } from '../services/book-author.service';
import { AuthorModel } from '../models/AuthorModel';
import { Subscription, Subject } from 'rxjs';
import { Router} from '@angular/router';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject<any>();
  subscr!: Subscription;
  authors:AuthorModel[]=[];
  constructor(
    private bookauthorService: BookAuthorService,
    private router: Router
  ) { }

  create(){
    this.router.navigate(['create-author']);
  }

  bind() {
    this.router.navigate(['book-author']);
  }

  ngOnInit(): void {
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20
    };

      this.subscr = this.bookauthorService.getAuthors().subscribe(
      (value)=>
      {
        this.authors=value;
        this.dtTrigger.next();
      }
    );
  }

   ngOnDestroy() {
      this.subscr.unsubscribe();
      this.dtTrigger.unsubscribe();
  }

}
