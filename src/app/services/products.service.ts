import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';
import { Order } from '../models/order.model'; 
import { BehaviorSubject, Observable, tap } from 'rxjs'; 
import { TokenService } from '../auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService { 

  private _orderEndpoint: string = 'http://localhost:8080/api/order';

  private baseUrl: string = environment.base_url + "/game";

  constructor(private http: HttpClient, private tokeService: TokenService) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  public getProductByIndex(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  public updateProductByIndex(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  } 

  public sendOrders(request: Order): void{ 
      this.http
      .post<string>(this._orderEndpoint, request) 
      .subscribe(

        res=>{
   
         console.log(res);
   
        },     err=>{
   
          console.log(err);
   
        });
       
  }

}
