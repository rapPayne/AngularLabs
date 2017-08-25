import { OrderLine } from "./OrderLine";
import { Customer } from "./Customer";

export class Order {
  orderID: number;
  customerID: string
  status: number;
  orderDate: Date;
  shipVia: string;
  shipping: number;
  tax: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
  lines: Array<OrderLine>;
  customer: Customer;

  // orderTotal():number {
  //   return this.lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  // }
}