import { RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { ObservableComponent } from './observable/observable.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';

const routes = [
  {path:"", component: WelcomeComponent},
  {path:"builtInDirectives", component: BuiltInDirectivesComponent},
  {path:"forms", component: FormsDemoComponent},
  {path:"observable", component: ObservableComponent},
  {path:"**", component: NotFoundComponent},
];
export const router = RouterModule.forRoot(routes);