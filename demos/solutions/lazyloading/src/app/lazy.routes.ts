import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

export const LazyRoutes = RouterModule.forChild([
  {path:"", component:LazyComponent}
]);