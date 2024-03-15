import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductDetailComponent } from '../product-detail/product-detail.component'; 
import { ProductsService } from '../../services/products.service'; 
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-index',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss'
}) 


export class ProductIndexComponent {
  public products: Product[] = [];  

  constructor(private productsService: ProductsService, private cartService: CartService){ 

  }
 
  ngOnInit() : void{ 
     this.productsService.
     getProducts().
     subscribe((products: Product[]) => { 
        this.products = products;
     });
  }
 
  public onBuyProduct(product: Product):void { 
       this.cartService.addProductToCart(product); 
  }


}
