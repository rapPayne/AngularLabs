import Product from "./product";

export default class Location {
  constructor(
    private locationID: string,
    private description: string,
    private productID: number,
    private quantity: number,
    private product: Product
  ) {}
}
