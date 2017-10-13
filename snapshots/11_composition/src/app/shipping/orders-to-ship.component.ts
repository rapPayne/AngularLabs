import { Component, OnInit } from '@angular/core';
import { prepareOrders } from '../shared/orders';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
    private orders;
    constructor() { }

    ngOnInit() {
      this.orders = prepareOrders();
    }
}
