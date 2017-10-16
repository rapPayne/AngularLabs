import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { OrdersToShipComponent } from "./shipping/orders-to-ship.component";
import { ShipOrderComponent } from "./shipping/ship-order.component";
import { ReceiveProductComponent } from "./receiving/receive-product.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { LoginComponent } from "./login/login.component";

const routes = [
  {path: "login", component: LoginComponent },
  {path: "ship", component: OrdersToShipComponent},
  {path: "ship/:orderID", component: ShipOrderComponent},
  {path: "receive", component: ReceiveProductComponent},
  {path: "inventory", component: InventoryComponent},
  {path: "", component: DashboardComponent},
];

export const routing = RouterModule.forRoot(routes);
