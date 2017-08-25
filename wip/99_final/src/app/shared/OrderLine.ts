import { Product } from './Product';
import { Location } from './Location';

export class OrderLine {
  quantity: number;
  productID: number;
  locationID: string;
  price: number;
  picked: Boolean;
  product: Product;
  location: Location;
}