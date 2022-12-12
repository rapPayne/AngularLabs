import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NumberMakerComponent } from './number-maker.component';
import { GenericComponent } from './others.component';

const routes: Routes = [
  { path: "numbers", component: NumberMakerComponent },
  { path: "generic", component: GenericComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
class AppRoutingModule { }



@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    NumberMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

