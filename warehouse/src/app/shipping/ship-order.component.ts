import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css']
})
export class ShipOrderComponent implements OnInit {
  order: Order = undefined;
  /*
  order = {
    orderID: 11073,
    customerID: 200,
    shipToName: "Tina Woodall",
    shipToAddress: "1217 Cannon Lane",
    shipToCity: "Biloxi",
    shipToRegion: "MS",
    shipToPostalCode: "39531",
    lines: [
      { quantity: 3, product: { productID: 4, productName: "Lettuce" } },
      { quantity: 12, product: { productID: 31, productName: "Sticky Rice" } },
      { quantity: 3, product: { productID: 65, productName: "Bavarian Ale" } }
    ]
  };
  */
  customer = {
    customerID: 200,
    first: "Tina",
    last: "Woodall",
    company: "Cotton Fox",
    address: "1217 Cannon Lane",
    city: "Biloxi",
    region: "MS",
    postalCode: "39531",
    email: "tinaWoodall@mailinator.com"
  };

  constructor(private _orderService: OrderService) { }

  ngOnInit() {
  }

  getOrderToShip() {
    this.order = this._orderService.getOrderToShip();
    console.log("in getOrderToShip")
  }

  shipTheOrder(orderID, shippingNumber) {
    //console.log(`Shipping the order ${orderID} via ${shippingNumber}`);
    this.order = undefined;
  }
}
