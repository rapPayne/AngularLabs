import { OrderLine } from "./OrderLine";

export class Order {
  orderID: String;
  customerID: String
  status: String;
  orderDate: Date;
  shipVia: String;
  shipping: Number;
  tax: Number;
  shipName: String;
  shipAddress: String;
  shipCity: String;
  shipRegion: String;
  shipPostalCode: String;
  shipCountry: String;
  lines: Array<OrderLine>;
}