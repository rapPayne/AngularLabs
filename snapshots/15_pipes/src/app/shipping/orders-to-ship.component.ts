import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/Order';
import { OrdersRepositoryService } from '../services/orders-repository.service';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
    private orders:Order[] = new Array<Order>();

    constructor(private _ordersRepository:OrdersRepositoryService)
    {
	this._ordersRepository.getOrdersReadyToShip().then(orders => this.orders = orders);
    }

    ngOnInit() {
    }
}
