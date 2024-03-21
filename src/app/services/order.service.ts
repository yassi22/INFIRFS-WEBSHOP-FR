import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'; 
import { BehaviorSubject, Observable, tap } from 'rxjs'; 
import { TokenService } from '../auth/token.service';  
import { Order } from '../models/order.model';
import { GetOrder } from '../models/getorder.model';



@Injectable({
  providedIn: 'root'
})
export class OrderService { 

  private baseUrl: string = environment.base_url + "/order/user/";

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getOrders(): Observable<GetOrder[]> {
    return this.http.get<GetOrder[]>(this.baseUrl + this.tokenService.getUserId());
  }


}
