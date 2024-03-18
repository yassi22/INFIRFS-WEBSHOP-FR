import { Component } from '@angular/core';
import { Order } from '../models/order.model'; 
import { OrderService } from '../services/order.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  public orders: Order[] = new Array<Order>();
  public loadingOrders: boolean = true;
  public user_email : String; 
 



constructor(private OrderService: OrderService){ 

} 

ngOnInit(): void {

  this.OrderService
    .getOrders()
    .subscribe((orders: Order[]) => {
      this.loadingOrders = false;
      this.orders = orders;
    });
}



}
