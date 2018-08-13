import { Component, OnInit } from '@angular/core';
import { prepareOrders } from '../shared/orders';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    orders;
    constructor() { }

    ngOnInit() {
	this.orders = prepareOrders();
    }
}
