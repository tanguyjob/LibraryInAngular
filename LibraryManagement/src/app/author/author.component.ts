import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookAuthorService } from '../services/book-author.service';
import { AuthorModel } from '../models/AuthorModel';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
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
      this.subscr = this.bookauthorService.getAuthors().subscribe(
      (value)=>this.authors=value,
    );
  }

   ngOnDestroy() {
      this.subscr.unsubscribe();
  }

}
