import Product from "./product";
import Location from "./location";

export default class OrderLine {
  constructor(
    private quantity: number,
    private productID: number,
    private locationID: string,
    private price: number,
    private picked: boolean,
    private product: Product,
    private location: Location
  ) {}
}
