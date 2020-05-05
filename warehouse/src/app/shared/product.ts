export default class Product {
  constructor(
    private productID: number,
    private name: string,
    private description: string,
    private price: number,
    private imageUrl: string,
    private featured: boolean
  ) {}
}
