import OrderLine from "./orderLine";
import Customer from "./customer";

export default class Order {
  constructor(
    private orderID: number,
    private customerID: number,
    private status: number,
    private orderDate: Date,
    private shipVia: number,
    private shipping: number,
    private tax: number,
    private shipName: string,
    private shipAddress: string,
    private shipCity: string,
    private shipRegion: string,
    private shipPostalCode: string,
    private shipCountry: string,
    private lines: Array<OrderLine>,
    private customer: Customer
  ) {}
}
