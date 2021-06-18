import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
  orders;
  user;
  constructor(private _http: HttpClient, public _login: LoginService) { }

  ngOnInit() {
    this.user = this._login.user;
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    this._http
      .get("/api/orders/readyToShip")
      .toPromise()
      .then(
        res => this.orders = res,
        err => console.error("Problem loading orders", err)
      )
  }
}
