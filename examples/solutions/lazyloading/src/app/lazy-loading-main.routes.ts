import { RouterModule } from '@angular/router';
import { LazyLoadingMainComponent } from './lazy-loading-main.component'
import { EagerComponent } from './eager.component';
import { LazyModule } from './lazy.module';

export const LazyLoadingMainRoutes = RouterModule.forChild([
  {path: "solution/lazy", component: LazyLoadingMainComponent },
  {path: "solution/lazy/eager", component: EagerComponent},
  {path: "solution/lazy/lazy", loadChildren: "./lazy.module#LazyModule"}
]);