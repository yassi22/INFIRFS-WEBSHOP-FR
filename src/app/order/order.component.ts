import { Component } from '@angular/core';
import {Order } from '../models/order.model'; 
import { OrderService } from '../services/order.service'; 
import { ActivatedRoute } from '@angular/router'; 
import { GetOrder } from '../models/getorder.model';
import { LanguageService } from '../services/language.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  public orders: GetOrder[] = new Array<GetOrder>();
  public loadingOrders: boolean = true;
  public user_email : String; 
 



constructor(private OrderService: OrderService, public languageService: LanguageService){ 

} 

ngOnInit(): void {

  this.OrderService
    .getOrders()
    .subscribe((orders: GetOrder[]) => {
      this.loadingOrders = false;
      this.orders = orders;
    });
}



}
