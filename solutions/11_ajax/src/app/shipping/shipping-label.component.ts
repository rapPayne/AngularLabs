import { Component, Input } from '@angular/core';
import { Order } from '../shared/Order';
@Component({
  selector: 'nw-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.css']
})
export class ShippingLabelComponent {
  @Input() order: Order = new Order();
}
