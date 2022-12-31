import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Product';
@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {

  showForm: boolean = false;
  trackingNumber: string = "";
  receivedProducts: Array<Product & { quantity?: number }> = new Array();
  productID?: number;
  quantity?: number;

  constructor() { }

  ngOnInit() {
  }

  saveTrackingNumber() {
    this.showForm = true;
  }

  receiveProduct() {
    this.receivedProducts.push({ id: this.productID, quantity: this.quantity });
    this.productID = undefined;
    this.quantity = undefined;
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
