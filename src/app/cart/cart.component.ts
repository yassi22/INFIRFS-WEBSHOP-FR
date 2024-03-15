import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  public productsInCart: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit(){
    
    this.productsInCart = this.cartService.getProductInCart()
  } 


  public removeProductFromCart(product_index: number) { 
    this.cartService.removeProductFromCart(product_index); 
} 


}
