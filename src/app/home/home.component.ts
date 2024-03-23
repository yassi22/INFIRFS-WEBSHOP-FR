import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model'; 
import { CartService } from '../services/cart.service';
import { ProductThumbnailComponent } from '../products/product-thumbnail/product-thumbnail.component';
import { LanguageService } from '../services/language.service';
import { Router, RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public loadingProducts: boolean = true;
  public products: Product[] = new Array<Product>();  


constructor(private productsService: ProductsService, private cartService: CartService, public languageService: LanguageService){ 

}

ngOnInit(): void {
  this.productsService
    .getProducts()
    .subscribe((products: Product[]) => {
      this.loadingProducts = false;
      this.products = products;
    });
}
 
public onBuyProduct(product: Product) {
  this.cartService.addProductToCart(product)
}



}
