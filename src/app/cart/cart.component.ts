import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model'; 
import { TokenService } from '../auth/token.service';
import { Order } from '../models/order.model'; 
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  public products_in_cart: Product[]; 

  public userIsLoggedIn: boolean = false;

  constructor(private cartService: CartService, private authService: AuthService, private tokenService: TokenService, private productService:ProductsService) { }

  ngOnInit() {
    this.products_in_cart = this.cartService.allProductsInCart();
    this.cartService.$productInCart.subscribe((products: Product[]) => {
      this.products_in_cart = products;
    }) 

    this.checkLoginState(); 

  }

  public removeProductFromCart(product_index: number) {
    this.cartService.removeProductFromCart(product_index);

   

  }  

  public sendOrders():void {  
    let user_email = this.tokenService.getEmail(); 
    this.products_in_cart = this.cartService.allProductsInCart();  

    let product_ids : number[] = []; 
    this.products_in_cart.forEach( product =>{ 
      product_ids.push(product.id);
    })

    const order =  new Order(product_ids, user_email);   
    this.productService.sendOrders(order);
    
    if(order == null){ 
      this.products_in_cart = this.cartService.allProductsInCart();  
    } else { 
      this.products_in_cart = [];
    }
  
  } 



  
  public checkLoginState(): void{

    this.authService
      .$userIsLoggedIn
      .subscribe((loginState: boolean) => {
        this.userIsLoggedIn = loginState;
      });
  }



}
