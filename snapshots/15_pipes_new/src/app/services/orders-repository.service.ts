import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';
import { Product } from '../shared/Product';
import { Location } from '../shared/Location';

@Injectable()
export class OrdersRepositoryService {

    getOrdersReadyToShip()
    {
	return this._http.get('/api/orders/readyToShip')
	    .map(p => <Order[]> p.json() )
	    .toPromise();
    }

    markAsShipped(orderID)
    {
	this._http.patch('/api/orders/' + orderID + '/markAsShipped', "")
	    .toPromise()
	    .then((response) => console.log("Response from markAsShipped: " + response));
    }

    markAsTrouble(orderID)
    {
	this._http.patch('/api/orders/' + orderID + '/markAsProblem', "")
	    .toPromise()
	    .then((response) => console.log("Response from markAsShipped: " + response));
    }

    getOrder(orderID: number, order: Order) // This loads the order from the REST endpoint.  But the JSON returned does *NOT* match our structure, so we have to map it.
    {
	this._http.get('/api/orders/' + orderID)
	    .toPromise()
	    .then((response) => {
		const o:any = response.json();
		//let order = new Order();
		order.orderID = o.orderID;
		order.customerID = o.customerID;
		order.status = o.status;
		order.orderDate = o.orderDate;
		order.shipVia = o.shipVia;
		order.shipping = o.shipping;
		order.tax = o.tax;
		order.shipName = o.shipName;
		order.shipAddress = o.shipAddress;
		order.shipCity = o.shipCity; 
		order.shipRegion = o.shipRegion;
		order.shipPostalCode = o.shipPostalCode; 
		order.shipCountry = o.shipCountry;
		order.lines = new Array<OrderLine>();
		o.lines.forEach(line =>
		{
		    let l:OrderLine = new OrderLine();
		    l.quantity = line.quantity;
		    l.productID = line.productID;
		    l.price = line.unitPrice;
		    l.picked = false;
		    l.product = new Product();
		    this._http.get('/api/products/' + l.productID)
			.toPromise()
			.then((response) => {
			    const p:any = response.json();
			    l.product.productID = p.productID;
			    l.product.name = p.name;
			    l.product.description = p.description;
			    l.product.imageUrl = p.imageUrl;
			    l.product.featured = p.featured;
			});
		    l.location = new Location();
		    order.lines.push(l);
		});
		console.log(order);
	    });
    }

    constructor(private _http:Http){}
}
