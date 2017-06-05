import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/Customer';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css']
})
export class ShipOrderComponent implements OnInit {
  customer:Customer;
  

  constructor() { 
    this.customer = new Customer();
    this.customer.givenName = "Ororo";
    this.customer.familyName = "Munroe";
    this.customer.address = "777 Placeholder Pl";
    this.customer.city = "Birnin Zana";
    this.customer.region = "RG";
    this.customer.country = "Wakanda"
  }

  ngOnInit() {
  }

}
