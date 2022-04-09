import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookAuthorService } from '../services/book-author.service';
import { BookAuthorBOModel } from '../models/BookAuthorBOModel';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

subscr!: Subscription;
bas:BookAuthorBOModel[]=[];
  constructor(
private bookauthorService: BookAuthorService,
private router: Router
  ) { }

    create(){
      this.router.navigate(['create-book']);
    }


  ngOnInit(): void {
    this.subscr = this.bookauthorService.getBookAuthor().subscribe(
      (value)=>this.bas=value
    );
  }

    ngOnDestroy() {
    this.subscr.unsubscribe();
  }
}



