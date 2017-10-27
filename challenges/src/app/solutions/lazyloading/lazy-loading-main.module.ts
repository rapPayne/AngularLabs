import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingMainRoutes } from './lazy-loading-main.routes';
import { EagerComponent } from './eager.component'

@NgModule({
  imports: [
    CommonModule,
    LazyLoadingMainRoutes
  ],
  declarations: [
    EagerComponent
  ]
})
export class LazyLoadingMainModule { }
