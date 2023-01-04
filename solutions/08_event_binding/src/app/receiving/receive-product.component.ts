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
  currentProduct?: Product;

  constructor() { }

  ngOnInit() {
  }

  saveTrackingNumber() {
    this.showForm = true;
  }

  setCurrentProduct(product: Product = { id: 0, name: "Fake Product" }) {
    this.currentProduct = product;
  }

  receiveProduct() {
    console.log("Receive product");
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
