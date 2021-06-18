import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
  styles: ['#orderContents img { height: 50px }']
})
export class ReceiveProductComponent implements OnInit {
  showForm;
  receivedProducts = [];
  productID;
  quantity;
  trackingNumber;
  user;

  constructor(public _login: LoginService) { }

  ngOnInit() {
    this.user = this._login.user;
    console.warn(this.user, this._login)
  }

  saveTrackingNumber(trackingNumber) {
    this.showForm = true;
    console.log(trackingNumber)
  }

  receiveProduct(productID, quantity) {
    this.receivedProducts.push({ productID, quantity });
    this.productID = undefined;
    this.quantity = undefined;
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
