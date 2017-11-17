import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutes } from './lazy.routes'

@NgModule({
  imports: [
    CommonModule,
    LazyRoutes
  ],
  declarations: [
    LazyComponent
  ]
})
export class LazyModule { }
