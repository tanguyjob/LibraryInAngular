import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookAuthorService } from '../services/book-author.service';
import { BookAuthorBOModel } from '../models/BookAuthorBOModel';
import { Subscription, Subject } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject<any>();

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
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20
    };
    this.subscr = this.bookauthorService.getBookAuthor().subscribe(
      (value)=> {
      this.bas=value;
      this.dtTrigger.next();
        }
      );
    }

  ngOnDestroy() {
    this.subscr.unsubscribe();
    this.dtTrigger.unsubscribe();
    }
}



