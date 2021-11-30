import { Product } from './Product';

export class Location {
    id: string;
    description: string;
    productID: number;
    quantity: number;
    product: Product;
}
