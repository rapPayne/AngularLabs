import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ShipPackageService {

  constructor(private _http:Http) { }

  getNextOrderToShip() {
    this._http.get('/orders/nextToShip')
  }

}
