import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Order } from '../shared/Order';


@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
   orders:Order[] = new Array<Order>();

  constructor(private _http:Http) { }

  ngOnInit() {
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
