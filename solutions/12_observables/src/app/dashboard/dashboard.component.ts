import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../shared/Order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  orders: Order[] = new Array<Order>();
  ordersSub?: Subscription;
  constructor(private _http: HttpClient) { }
  ngOnInit() {
    this.getOrdersReadyToShip();
  }

  ngOnDestroy() {
    this.ordersSub?.unsubscribe();
  }

  getOrdersReadyToShip() {
    this.ordersSub = this._http.get<Order[]>('/api/orders/readyToShip')
      .subscribe({
        next: ((orders: Order[]) => this.orders = orders)
      })
  }
}
