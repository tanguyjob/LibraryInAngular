import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthentificationService } from '../services/authentification.service';
import { Subscription } from 'rxjs';
import { BookModel } from '../models/BookModel';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
book!: BookModel;
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

/*
addToCart(content: any, book: any){
 //ajouter au panier
  if (this.cartService.addToCart(book))
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
*/

  ngOnInit(): void {
    /*this.subs = this.authSrv.getIsAuthObs().subscribe(
      (v)=> {
        this.isAuth=v;
      }
    );
*/


    const id = this.route.snapshot.params['id'];
      this.subscr = this.bookService.getBook(+id).subscribe(
        (value)=>this.book=value,
        (error)=> { console.log('error http call'+ error.message)}
      )
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subscr.unsubscribe();
  }


}
