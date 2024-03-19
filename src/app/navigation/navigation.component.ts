import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})


export class NavigationComponent implements OnInit {
  public title: string = 'MASH GAMES'; 

  public userIsLoggedIn: boolean = false;


  public amountOfProducts: number = 0;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.cartService.$productInCart.subscribe((products: Product[]) => {
      this.amountOfProducts = products.length;
    }) 
    this.checkLoginState();

  } 

  public onLogout(): void{
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  public checkLoginState(): void{

    this.authService
      .$userIsLoggedIn
      .subscribe((loginState: boolean) => {
        this.userIsLoggedIn = loginState;
      });
  }



}
