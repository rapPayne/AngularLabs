import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModule } from "./lazy.module"
import { LazyLoadingMainRoutes } from './lazy-loading-main.routes';
import { EagerComponent } from './eager.component';
import { LazyLoadingMainComponent } from './lazy-loading-main.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadingMainRoutes
  ],
  declarations: [
    EagerComponent,
    LazyLoadingMainComponent,
  ]
})
export class LazyLoadingMainModule { }
