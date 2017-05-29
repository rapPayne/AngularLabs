import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShipOrderComponent } from './shipping/ship-order.component';

import { OrderService } from './shared/order.service';

@NgModule({
  declarations: [
    AppComponent,
    ReceiveProductComponent,
    InventoryComponent,
    ShipOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
