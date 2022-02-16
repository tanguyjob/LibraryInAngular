import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthentificationService } from '../services/authentification.service';
import { Subscription } from 'rxjs';
import { BookModel } from '../models/BookModel';
import { AuthorModel } from '../models/AuthorModel';
import { BookService } from '../services/book.service';
import { BookAuthorModel } from '../models/BookAuthorModel';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
author!: AuthorModel;
bookAuthors:BookAuthorModel[]=[];
subscr!: Subscription;
subs!: Subscription;
closeModal!: string;
isAuth!:boolean;
  constructor(
    private authSrv: AuthentificationService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private modalService: NgbModal,
    private bookService: BookService
  ) { }

  ngOnInit(): void {    
    const id = this.route.snapshot.params['id'];
      this.subscr = this.bookService.getOneAuthor(+id).subscribe(
        (value)=>this.author=value,
        (error)=> { console.log('error http call'+ error.message)}
      )
       this.bookService.getBookByAuthorId(+id).subscribe(
      (value)=> this.bookAuthors=value
    );
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }



}
