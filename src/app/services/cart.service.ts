import { Injectable } from '@angular/core'; 
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService { 

  private productsInCart: Product[] = [];
  public $productsInCart : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]); 

  public getProductInCart(): Product[]{ 
      return this.productsInCart.slice();

  } 
   
  public addProductToCart(product: Product):void{  
    
      this.productsInCart.push(product);  
      this.$productsInCart.next(this.productsInCart.slice())
      console.log('Products in cart'); 
      console.log(this.productsInCart);  
    
  }

  constructor() { } 

  public removeProductFromCart(products_index: number){ 
    this.productsInCart.splice(products_index, 1); 
    this.$productsInCart.next(this.productsInCart.slice());
  }
 

}
