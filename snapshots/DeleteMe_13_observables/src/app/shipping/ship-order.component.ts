import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';
import { Product } from '../shared/Product';
import { Location } from '../shared/Location';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css'],
  styles:['.big-checkbox {transform: scale(2)}']
})
export class ShipOrderComponent implements OnInit {
    private order: Order = new Order();
    
    constructor(private _route: ActivatedRoute, private _http:Http)
    {
	this.loadOrder(this._route.snapshot.params['orderID']);
    }

    isReadyToShip(order)
    {
	return order.lines ? order.lines.every(line => line.picked) : false;
    }

    getBestLocation(orderLine)
    {
	this._http.get('/api/locations/forProduct/' + orderLine.productID)
	    .toPromise()
	    .then((response) => {
	    	const locations:Array<Location> = response.json(); // We get back an array of Location objects.
		if (locations.length > 0)
		{
		    const location:Location = locations[0]; // For now, take first.  Really should make sure it has enough stock
		    orderLine.locationID = location.locationID;
		    orderLine.location = location;
		}
		else orderLine.locationID = "none";
	    });
    }

    markAsShipped(order)
    {
	this._http.patch('/api/orders/' + order.orderID + '/markAsShipped', "")
	    .toPromise()
	    .then((response) => console.log("Response from markAsShipped: " + response));
	order.status = 1;
    }

    markWithProblem(order)
    {
	this._http.patch('/api/orders/' + order.orderID + '/markAsProblem', "")
	    .toPromise()
	    .then((response) => console.log("Response from markAsProblem: " + response));
	order.status = 2;
    }

    loadOrder(orderID: number)	// This loads the order from the REST endpoint.  But the JSON returned does *NOT* match our structure, so we have to map it.
    {
	this._http.get('/api/orders/' + orderID)
	    .toPromise()
	    .then((response) => {
		const o:any = response.json();
		let order = new Order();
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
		this.order = order;
		console.log(this.order);
	    });
    }

    ngOnInit() {
    }
}
