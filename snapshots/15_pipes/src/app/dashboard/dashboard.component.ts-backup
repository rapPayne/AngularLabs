import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Order } from '../shared/Order';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private orders:Order[] = new Array<Order>();

    constructor(private _http:Http)
    {
	this.getOrdersReadyToShip();
    }

    getOrdersReadyToShip()
    {
	this._http.get('/api/orders/readyToShip')
	    .toPromise()
	    .then((response) => { this.orders = response.json(); });
    }

    ngOnInit() {
    }
}
