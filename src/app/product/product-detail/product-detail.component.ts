import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() public product_detail: Product; 

  @Output() public buy: EventEmitter<Product> = new EventEmitter<Product>();


  public onBuyProduct(): void{ 
      this.buy.emit(this.product_detail);
  } 


}
