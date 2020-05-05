import { Component, OnInit } from "@angular/core";
import Order from "../shared/order";
import Customer from "../shared/customer";
import Location from "../shared/location";
import Product from "../shared/product";
import OrderLine from "../shared/orderLine";

@Component({
  selector: "cw-ship-order",
  templateUrl: "./ship-order.component.html",
  styleUrls: ["./ship-order.component.scss"],
})
export class ShipOrderComponent implements OnInit {
  constructor(private order: Order) {}

  ngOnInit() {
    const customer: Customer = new Customer(
      97531,
      "Glenn",
      "Espina",
      "ABC Co",
      "111 City Dr",
      "Redondo Beach",
      "CA",
      "90748",
      "USA",
      "310-555-0101",
      "glenn.espina@ngc.com",
      "password"
    );
    const lines: Array<OrderLine> = [];
    this.order = new Order(
      1,
      1,
      2,
      new Date(),
      2,
      5.5,
      0.55,
      "Tina Chang",
      "AnyTown",
      "LongBeach",
      "CA",
      "91110",
      "US",
      lines,
      customer
    );
    const product: Product = new Product(
      12345,
      "Foo Bar",
      "The best Foo Bar",
      23,
      "/assets/images/productImages/7.jpg",
      true
    );
    const location: Location = new Location(
      "3456",
      "Hidden Bunker",
      123,
      300,
      product
    );

    lines.push(new OrderLine(5, 2468, "3456", 100, false, product, location));
  }
}
