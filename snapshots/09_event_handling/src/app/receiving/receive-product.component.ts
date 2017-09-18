import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
  styles: ['#orderContents img { height: 50px }']
})
export class ReceiveProductComponent implements OnInit {
  showForm;

  constructor() { }

  ngOnInit() {
  }

  saveTrackingNumber() {
    this.showForm = true;
  }

  receiveProduct() {
    console.log("You clicked 'receive product'");
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
