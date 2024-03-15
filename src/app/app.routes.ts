import { Routes } from '@angular/router';
import { ProductIndexComponent } from './product/product-index/product-index.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth/auth.guard';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductShowComponent } from './product/product-show/product-show.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [ 

    {path: '', component: HomeComponent},

    {path: 'products', component: ProductIndexComponent, children: [ 
        {path: '', component:ProductIndexComponent},
        {path: ':id', component: ProductShowComponent}
    ]}, 

    {path: 'cart', component: CartComponent, canActivate: [authGuard]} , 
    
    {path: 'auth', children: [{ path: 'login', component:LoginComponent}]}
    // register path toevoegen 
    // log out path toevoegen 

    
];
