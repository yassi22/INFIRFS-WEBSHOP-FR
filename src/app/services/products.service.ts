import { Injectable } from '@angular/core'; 
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {  

  // private products: Product[] = [ 
  //   new Product("Bob Marley",1000,"Muziek"), 
  //   new Product("AC/DC",560,"Muziek") 

  // ]; 

  constructor(private http:HttpClient) { } 

  public getProducts(): Observable<Product[]>{ 
    return this.http.get<Product[]>("http://localhost:8080/api/products");
  } 

 


}
