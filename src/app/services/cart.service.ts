import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';
import { Order } from '../models/order.model';

const localStorageKey: string = "products-in-cart"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Product[] = [];
  public $productInCart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.loadProductsFromLocalStorage();
  }

  public addProductToCart(product: Product) {
    this.productsInCart.push(product);
    this.saveProductsAndNotifyChange();
  }

  public removeProductFromCart(product_index: number) {
    this.productsInCart.splice(product_index, 1);
    this.saveProductsAndNotifyChange();
  }

  public allProductsInCart(): Product[] {
    return this.productsInCart.slice();
  }
 

  // ------------ PRIVATE ------------------

  private saveProductsAndNotifyChange(): void {
    this.saveProductsToLocalStorage(this.productsInCart.slice());
    this.$productInCart.next(this.productsInCart.slice());
  }

  private saveProductsToLocalStorage(products: Product[]): void {
    localStorage.setItem(localStorageKey, JSON.stringify(products))
  }

  private loadProductsFromLocalStorage(): void {
    let productsOrNull = localStorage.getItem(localStorageKey)
    if (productsOrNull != null) {

      // Parse the JSON string to a Product list
      let products: Product[] = JSON.parse(productsOrNull)

      // Assign the products to the productsInCart attribute and notify our subscribers
      this.productsInCart = products
      this.$productInCart.next(this.productsInCart.slice());
    }
  }

}
