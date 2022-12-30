import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/Order';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
  orders: Order[] = new Array<Order>();
  constructor() { }

  ngOnInit() {
  }

}
