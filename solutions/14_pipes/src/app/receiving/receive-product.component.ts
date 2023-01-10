import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { iif, of, map, mergeMap, Observable, take, tap } from 'rxjs';
import { Product } from '../shared/Product';
import { Location } from '../shared/Location';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/User';
@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent {

  showForm: boolean = false;
  trackingNumber: string = "";
  receivedProducts:
    Array<Product & { quantity?: number, location: Location }> = new Array();
  productName?: string;
  quantity?: number;
  currentProduct?: Product;
  foundProducts$?: Observable<Product[]>;
  bestLocation?: Location;

  constructor(private _http: HttpClient, private _authSvc: AuthService) { }

  saveTrackingNumber() {
    this.showForm = true;
  }

  setCurrentProduct(product: Product = { id: 0, name: "Fake Product" }) {
    this.currentProduct = product;
    let foo: any;
    this._http
      .get<Location[]>(`/api/locations/forProduct/${product.id}`)
      .pipe(
        mergeMap(locs => iif<Location[], Location[]>(() => locs.length == 0, of([{ id: "Any open slot" }]), of(locs))),
        map<Location[], Location>(locs => locs.reduce(
          (a, b) => (a.quantity ?? 0) < (b.quantity ?? 0) ? a : b
        )),
      )
      .subscribe({
        next: (location: Location) => {
          console.log("new subscription", { location })
          this.bestLocation = location
        },
      });
  }

  receiveProduct() {
    this.receivedProducts.push({ ...this.currentProduct, quantity: this.quantity, location: this.bestLocation ?? {} });
    this.productName = undefined;
    this.quantity = undefined;
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }

  setSearchString(event: Event) {
    const searchString: string | null = (event.target as HTMLInputElement).value
    this.foundProducts$ = searchString ?
      this._http
        .get<Product[]>(`/api/products?search=${searchString}`)
      : undefined;
  }

}
