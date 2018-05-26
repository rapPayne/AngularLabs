import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';
import { Product } from '../shared/Product';
import { Location } from '../shared/Location';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css'],
  styles: ['.big-checkbox { transform: scale(2) }', 'img {height:50px}']
})
export class ShipOrderComponent implements OnInit {
  private order: Order = new Order();
  instructions;

  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit() {
    const orderID = this._route.snapshot.params['orderID'];
    this._http
      .get(`/api/orders/${orderID}`)
      .pipe(
        map(res => <Order>res)
      )
      .subscribe(o => this.order = o);
  }

  isReadyToShip(order) {
    return order.lines && order.lines.every(line => line.picked);
  }

  getBestLocation(orderLine) {
    this._http
    .get(`/api/locations/forProduct/${orderLine.productID}`)
    .pipe(
      map(res => <Array<Location>>res)
    )
    .subscribe(locations => orderLine.locationID = locations[0].locationID);
  }

  markAsShipped(order) {
    order.status = 1;
    this._http
    .patch(`/api/orders/${order.orderID}/MarkAsShipped/`,{})
    .subscribe();
  }

  markWithProblem(order) {
    order.status = 2;
    this.instructions = "Don't pick this order! It needs to be looked at by a supervisor.";
    this._http
    .patch(`/api/orders/${order.orderID}/MarkAsProblem/`,{})
    .subscribe();
  }
}