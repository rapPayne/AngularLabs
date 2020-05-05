export default class Customer {
  constructor(
    private customerID: number,
    private givenName: string,
    private familyName: string,
    private companyName: string,
    private address: string,
    private city: string,
    private region: string,
    private postalCode: string,
    private country: string,
    private phone: string,
    private email: string,
    private password: string,
    private imageUrl?: string
  ) {}
}
