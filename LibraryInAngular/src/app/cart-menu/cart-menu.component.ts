import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent implements OnInit {
nbitem!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.basketcounter$.subscribe(
      (value)=> {
        this.nbitem = value;
      }
    )
  }


}
