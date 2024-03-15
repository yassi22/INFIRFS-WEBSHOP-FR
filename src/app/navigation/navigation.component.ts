import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  // public amountOfProducts number = 0; 

  constructor(private cartSerivce: CartService){

  } 

  // ngOnInit(){
  //   this.cartSerivce.$productsInCart.subscribe((products: Product[] => {
  //     this.amountOfProducts = products.length
  //   }))
  // }


}
