import { Injectable } from '@angular/core';
import { Order } from '../shared/order';

@Injectable()
export class OrderService {

  constructor() { }

  getOrderToShip(): Order {
    let fake = new Order();
    fake = {
      orderID: 12345,
      customerID: 200,
      shipToName: "Fake Customer",
      shipToAddress: "223 Holiday Drive",
      shipToCity: "Orlando",
      shipToRegion: "FL",
      shipToPostalCode: "32034",
      lines: [
        { product: { productID: 2, productName: "Rolled Oats", unitPrice: 22.34 }, productLocation: "", quantity: 4 },
        { product: { productID: 34, productName: "Breakfast cereal", unitPrice: 22.34 }, productLocation: "A2C4", quantity: 3 },
        { product: { productID: 53, productName: "Yummy coffee", unitPrice: 22.34 }, productLocation: "", quantity: 2 },
        { product: { productID: 12, productName: "Chewing gum", unitPrice: 22.34 }, productLocation: "", quantity: 6 }
      ]
    };
    console.log(fake);
    return fake;
  }
}
