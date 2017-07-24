import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Order } from '../shared/Order';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  //numberOfOrders = 3;
  orders:Order[] = new Array<Order>();

  constructor (private _http:Http) {
    //this.numberOfOrders = 8;
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    this._http.get('/api/orders/readyToShip')
    .toPromise()
    .then((res) => {
      this.orders = res.json();
    });
  }

}
