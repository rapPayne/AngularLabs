import { OrderLine } from './OrderLine';
import { Customer } from './Customer';

export class Order {
    id: number;
    customerID: number;
    status: number;
    orderDate: Date;
    shipVia: number;
    shipping: number;
    tax: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    shipRegion: string;
    shipPostalCode: string;
    shipCountry: string;
    lines: Array<OrderLine>;
    customer: Customer;
}
