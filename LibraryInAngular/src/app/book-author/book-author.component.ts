import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { publishBehavior, take } from 'rxjs/operators';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthentificationService } from '../services/authentification.service';
import { Subscription } from 'rxjs';
import { BookAuthorModel } from '../models/BookAuthorModel';
import { BookService } from '../services/book.service';
import { LanguageModel } from '../models/LanguageModel';


@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css']
})
export class BookAuthorComponent implements OnInit {
oneBookAuthor!: BookAuthorModel;
bas: BookAuthorModel[]=[];
subscr!: Subscription;
subscr2!: Subscription;
closeModal!: string;
isAuth!:boolean;
language!:LanguageModel;

  constructor(
    private authSrv: AuthentificationService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private modalService: NgbModal,
    private bookService: BookService
  ) { }

  addToCart(content: any, ba: any){
 //ajouter au panier
  if (this.cartService.addToCart(ba))
  {
    //modal
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  // revenir à book
  this.router.navigate(['catalog']);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  
       this.subscr2 = this.bookService.getLanguageById(1).subscribe(
        (value)=>this.language=value,
        (error)=> { console.log('error http call'+ error.message)}
      );
    
    
    this.subscr = this.authSrv.getIsAuthObs().subscribe(
      (v)=> {
        this.isAuth=v;
      }
    );

     const id = this.route.snapshot.params['id'];
      this.bookService.getBookAuthorById(+id).subscribe(
 (value)=> {this.bas=value;
            this.oneBookAuthor=this.bas[0]},
  (error)=> { console.log('error http call'+ error.message)}
 );
  }

   ngOnDestroy(): void {
    this.subscr2.unsubscribe();
    this.subscr.unsubscribe();
  }

}
