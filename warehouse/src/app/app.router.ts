import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ShipOrderComponent } from "./shipping/ship-order.component";
import { ReceiveProductComponent } from "./receiving/receive-product.component";
import { InventoryComponent } from "./inventory/inventory.component";

const routes = [
  {path: "ship", component: ShipOrderComponent},
  {path: "receive", component: ReceiveProductComponent},
  {path: "inventory", component: InventoryComponent},
  {path: "", component: DashboardComponent},
];

export const routing = RouterModule.forRoot(routes);