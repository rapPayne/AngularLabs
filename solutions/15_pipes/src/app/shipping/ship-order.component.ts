import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OrdersRepositoryService } from '../services/orders-repository.service';

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
    
    constructor(private _route: ActivatedRoute, private _http:Http, private _ordersRepository:OrdersRepositoryService)
    {
	this._ordersRepository.getOrder(this._route.snapshot.params['orderID'], this.order);
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
	this._ordersRepository.markAsShipped(order.orderID);
	order.status = 1;
    }

    markWithProblem(order)
    {
	this._ordersRepository.markAsTrouble(order.orderID);
	order.status = 2;
    }

    ngOnInit() {
    }
}
