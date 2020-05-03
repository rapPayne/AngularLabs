import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/Order';
import { OrdersRepositoryService } from '../services/orders-repository.service';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private orders:Order[] = new Array<Order>();

    constructor(private _ordersRepository:OrdersRepositoryService)
    {
	this._ordersRepository.getOrdersReadyToShip().then(orders => this.orders = orders);
    }

    ngOnInit() {
    }
}
