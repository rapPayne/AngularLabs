import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {

  showForm: boolean = false;
  trackingNumber: string = "";

  constructor() { }

  ngOnInit() {
  }

  saveTrackingNumber() {
    this.showForm = true;
  }

  receiveProduct() {
    console.log("Receive product");
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
