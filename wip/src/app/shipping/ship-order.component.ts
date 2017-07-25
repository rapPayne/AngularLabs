import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';
import { Product } from '../shared/Product';
import 'rxjs/add/operator/map';


@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styles: ['.big-checkbox { transform: scale(2) }', 'img {height:50px}']
})
export class ShipOrderComponent implements OnInit {
  orderID;
  private order: Order = new Order();
  private orderStatusTexts: string[] = [
    "Ready to ship",
    "Shipped",
    "Trouble",
    "Other"
  ];

  constructor(private _route: ActivatedRoute, private _http: Http) { }

  ngOnInit() {
    this.orderID = this._route.snapshot.params['orderID'];
    console.log("orderID", this.orderID);
    this._http.get('/api/orders/' + this.orderID)
      .map(r => <Order>r.json())
      .subscribe(
      (o) => {
        console.log("Got a response", o);
        this.order = o;
      },
      (error) => { console.error(`Error loading order ${this.orderID}`, error) }
      )
  }

  GetBestLocation(orderLine) {
    orderLine.locationID = "01A1A";
    console.log(orderLine);
  }
  MarkAsShipped(order) {
    order.status = 1;
    console.log(order);
  }
  MarkWithProblem(order) {
    order.status = 2;
    console.log(order);
  }
}
