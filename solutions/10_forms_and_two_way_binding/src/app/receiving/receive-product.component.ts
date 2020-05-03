import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  saveTrackingNumber(trackingNumber) {
    this.showForm = true;
    console.log(trackingNumber)
  }

  receiveProduct(productID, quantity) {
    this.receivedProducts.push({productID, quantity});
    this.productID = undefined;
    this.quantity = undefined;
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
