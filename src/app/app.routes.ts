import { Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { ProtectedComponent } from './protected/protected.component';
import { OrderComponent } from './order/order.component'; 
import { AccountComponent } from './account/account.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },  
  { path: 'order', component: OrderComponent}, 
  {path: 'account', component: AccountComponent},
  {path: 'auth/login', component: LoginComponent }, 
  {path: 'auth/register', component: RegisterComponent},  
  {path: 'unprotected', component: UnprotectedComponent }, 
  {path: 'protected', component: ProtectedComponent, canActivate: [authGuard] },
  // { path: 'categories', component: CategoriesComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent },
  // {
  //   path: 'auth', children: [
  //     { path: 'login', component: LoginComponent },
  //     // { path: 'register', component: RegisterComponent }
  //     // { path: 'logout', }
  //   ]
  // }
];
