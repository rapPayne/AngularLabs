import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {

  product = {
    productID: 1,
    productName: "Widget",
    unitPrice: 30.00
  }
  location = "A1"

  constructor() { }

  ngOnInit() {

  }

}
