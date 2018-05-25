import { Product } from './Product';

export class Location {
  locationID: string; //Note: locationID is not stored in the DB but read at runtime
  description: string;
  productID: number;
  quantity: number;
  product: Product;
}