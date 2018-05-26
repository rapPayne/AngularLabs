import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../shared/Order';
import { ListOfOrdersComponent } from '../shipping/list-of-orders.component';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders=[];
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    this._http
      .get<any[]>("/api/orders/readyToShip")
      .toPromise()
      .then(
        res => this.orders = res,
        err => console.error("Problem loading orders", err)
      )
  }
}
