import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Product';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { User } from '../shared/User';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {

  showForm: boolean;
  private receivedProducts = [];
  private productID: number;
  private quantity: number;
  user: User;
  trackingNumber: String;

  constructor(private _http: HttpClient, private loginService: LoginService) { }

  saveTrackingNumber(n) {
    console.log("Save tracking #" + n);
    this.showForm = true;
  }

  receiveProduct(productID: number, quantity: number) {
    console.log("Received " + quantity + " of product " + productID);
    let product = new Product();
    this._http.get('/api/products/' + productID, { observe: 'response' })
      .toPromise()
      .then((response) => {
        console.log("Product API", productID, response);
        // Unfortunately, the REST endpoint is not returning 404 when a product is not foumd; it returns 200 with an empty body!  :-(

        if (response.headers.get("content-length") === "0") {
          product.name = "NOT FOUND"
          product.productID = productID;
        }
        else {
          const p: any = response.body;
          product.productID = p.productID;
          product.name = p.name;
          product.description = p.description;
          product.imageUrl = p.imageUrl;
          product.featured = p.featured;
        }

        this.receivedProducts.push({ 'product': product, 'quantity': quantity });
      });

    this.productID = undefined;
    this.quantity = undefined;

    console.log(this.receivedProducts);
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }

  ngOnInit() {
    this.user = this.loginService.user;
  }

}
