import { Component, Input } from '@angular/core';
import { Order } from '../shared/Order';
import { OrderLine } from '../shared/OrderLine';
@Component({
  selector: 'nw-list-of-orders',
  templateUrl: './list-of-orders.component.html',
  styleUrls: ['./list-of-orders.component.css']
})
export class ListOfOrdersComponent {
  @Input() orders: Order[] = new Array<Order>();
  ngOnInit() { }
  getOrderTotal(lines: Array<OrderLine>) {
    console.log(lines)
    return lines.reduce(
      (p: number, ol: OrderLine) =>
        (p + (ol.price ?? 0) * (ol.quantity ?? 0)),
      0)
  }
}
