import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 
import { BehaviorSubject, Observable, tap } from 'rxjs'; 
import { TokenService } from '../auth/token.service';  
import { Order } from '../models/order.model';



@Injectable({
  providedIn: 'root'
})
export class OrderService { 

  private baseUrl: string = environment.base_url + "/order";

  constructor(private http: HttpClient, private tokeService: TokenService) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }


}
