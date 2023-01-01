import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OrdersToShipComponent } from "./shipping/orders-to-ship.component";
import { ReceiveProductComponent } from "./receiving/receive-product.component";
import { ShipOrderComponent } from "./shipping/ship-order.component";
import { InventoryComponent } from "./inventory/inventory.component";

const routes = [
  { path: "", component: DashboardComponent },
  { path: "ship", component: OrdersToShipComponent },
  { path: "receive", component: ReceiveProductComponent },
  { path: "ship/:orderId", component: ShipOrderComponent },
  { path: "inventory", component: InventoryComponent },
  // Okay, now you fill in the other four
];

export const AppRoutingModule = RouterModule.forRoot(routes);
