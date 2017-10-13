import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Product';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {

  private showForm:boolean;
  private receivedProducts = [];
  private productID: number;
  private quantity: number;  
  
  constructor() { }

  saveTrackingNumber(n)
  {
      console.log("Save tracking #" + n);
      this.showForm = true;
  }

  receiveProduct(productID: number, quantity: number)
  {
      console.log("Received " + quantity + " of product " + productID);

      //this.receivedProducts.push({'productID':productID,'quantity': quantity});
      this.receivedProducts.push({productID, quantity});
      this.productID = undefined;
      this.quantity = undefined;

      console.log(this.receivedProducts);
  }

  finishedReceiving()
  {
      console.log("Finished receiving");
  }

  ngOnInit() {
  }

}
