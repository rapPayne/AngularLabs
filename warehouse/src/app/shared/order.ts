import { Product } from './product';

export class Order {
  orderID: number;
  customerID: any;
  shipToName: string;
  shipToAddress: string;
  shipToCity: string;
  shipToRegion: string;
  shipToPostalCode: string;
  lines: {quantity: number, product: Product, productLocation: string}[]
}