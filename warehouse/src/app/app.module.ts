import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { routing } from './app.router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationExpandPipe } from './location-expand.pipe';
import { ListOfOrdersComponent } from './shipping/list-of-orders.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ReceiveProductComponent,
    ShipOrderComponent,
    DashboardComponent,
    LocationExpandPipe,
    ListOfOrdersComponent,
    OrdersToShipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
