import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';
import { Product } from '../shared/Product';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styles: ['.big-checkbox { transform: scale(2) }','img {height:50px}']
})
export class ShipOrderComponent implements OnInit {
  private order: Order;
  private orderStatusText = "jhjkhj";
  private orderStatusTexts: string[] = [
    "Ready to pick",
    "Shipped",
    "Trouble",
    "Other"
  ];

  constructor() {
    this.order = new Order();
    this.order.orderID = 12345;
    this.order.orderDate = new Date();
    this.order.shipVia = "GPS";
    this.order.shipping = 10;
    this.order.shipName = "Ororo Monroe";
    this.order.shipAddress = "777 Placeholder Pl";
    this.order.shipCity = "Birnin Zana";
    this.order.shipRegion = "RG";
    this.order.shipCountry = "Wakanda";
    this.order.status = 0;
    this.order.lines = [];
    const line1 = new OrderLine();
    //line1.locationID = "02B1C";
    line1.price = 30.00;
    line1.productID = 55;
    line1.quantity = 2;
    line1.product = new Product();
    line1.product.name = "Oreos";
    const line2 = new OrderLine();
    line2.locationID = "05A3A";
    line2.price = 30.00;
    line2.productID = 45;
    line2.quantity = 7;
    line2.product = new Product();
    line2.product.name = "Peanuts";
    this.order.lines.push(line1);
    this.order.lines.push(line2);

  }

  ngOnInit() {
  }

  GetBestLocation(orderLine) {
    orderLine.locationID = "01A1A";
    console.log(orderLine);
  }
  MarkAsShipped(order) {
    order.status = 1;
    this.orderStatusText = this.orderStatusTexts[order.status];
    console.log(order);
  }
  MarkWithProblem(order) {
    order.status = 2;
    this.orderStatusText = this.orderStatusTexts[order.status];
    console.log(order);
  }
}
