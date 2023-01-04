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
  productName?: string;
  quantity?: number;
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
    this.receivedProducts.push({ ...this.currentProduct, quantity: this.quantity });
    this.productName = undefined;
    this.quantity = undefined;
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
