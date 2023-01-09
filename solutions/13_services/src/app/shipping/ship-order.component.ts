import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css'],
  styles: ['.bigCheckbox {transform: scale(2);}']
})
export class ShipOrderComponent implements OnInit {
  //order: Order = new Order();   // <-- Remove this declaration
  order$?: Observable<Order>;
  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit() {
    const orderId = this._route.snapshot.params['orderId'];
    this.order$ = this._http.get<Order>(`/api/orders/${orderId}`)
  }

  getBestLocation(orderLine: OrderLine) {
    orderLine.locationID = "01A1A";
    console.log(orderLine.locationID);
  }

  markAsShipped(order: Order) {
    order.status = 1;
  }
  markAsProblem(order: Order) {
    order.status = 2;
  }

  isReadyToShip(order: Order) {
    return order.lines.every((ol: OrderLine) => ol.picked)
  }
}
