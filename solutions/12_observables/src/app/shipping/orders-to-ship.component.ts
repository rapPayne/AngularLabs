import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from '../shared/Order';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit, OnDestroy {
  orders: Order[] = new Array<Order>();
  orderSub?: Subscription;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.getOrdersReadyToShip();
  }

  ngOnDestroy(): void {
    this.orderSub?.unsubscribe();
  }

  getOrdersReadyToShip() {
    this.orderSub = this._http.get<Order[]>('/api/orders/readyToShip')
      .subscribe({
        next: (orders: Order[]) => this.orders = orders,
      })
  }
}
