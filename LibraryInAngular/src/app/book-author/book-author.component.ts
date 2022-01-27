import { Component, OnInit,OnDestroy } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthentificationService } from '../services/authentification.service';
import { Subscription } from 'rxjs';
import { BookAuthorModel } from '../models/BookAuthorModel';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css']
})
export class BookAuthorComponent implements OnInit {
bas: BookAuthorModel[]=[];
subscr!: Subscription;
subscr2!: Subscription;
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

  /*addToCart(content: any, book: any){
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
  }*/

  ngOnInit(): void {
   /* this.subscr = this.authSrv.getIsAuthObs().subscribe(
      (v)=> {
        this.isAuth=v;
      }
    );*/

     const id = this.route.snapshot.params['id'];
      this.bookService.getBookAuthorById(id).subscribe(
 (value)=> this.bas=value
 );

  }

   ngOnDestroy(): void {
    this.subscr2.unsubscribe();
    this.subscr.unsubscribe();
  }

}
