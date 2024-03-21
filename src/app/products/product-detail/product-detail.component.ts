import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent { 
  @Input() public product!: Product;
  @Output() public onBuyProduct: EventEmitter<Product> = new EventEmitter<Product>();

   
  private productId: number; 
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService, 
    public languageService: LanguageService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
    });

    this.productsService
      .getProductByIndex(this.productId)
      .subscribe((product: Product) => {
        this.product = product;
      });
  } 

  public buyProduct(product: Product) {
    this.onBuyProduct.emit(product);
  }

}
