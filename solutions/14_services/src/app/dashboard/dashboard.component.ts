import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../shared/Order';
import { ListOfOrdersComponent } from '../shipping/list-of-orders.component';
import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders = [];
  user;
  constructor(private _http: HttpClient, public _login: LoginService) { }

  ngOnInit() {
    this.user = this._login.user;
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    this._http
      .get<any[]>("/api/orders/readyToShip")
      .subscribe(
        res => this.orders = res,
        err => console.error("Problem loading orders", err)
      )
  }
}
