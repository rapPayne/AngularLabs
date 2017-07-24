import { Product } from './Product';

export class Location {
  locationID: String; //Note: locationID is not stored in the DB but read at runtime
  description: String;
  productID: Number;
  quantity: Number;
  product: Product;
}