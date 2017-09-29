import { RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { PeopleListComponent } from './composition/people-list.component';
import { ObservableComponent } from './observable/observable.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';

const routes = [
  {path:"", component: WelcomeComponent},
  {path:"ajax", component: AjaxPeopleListComponent},
  {path:"forms", component: FormsDemoComponent},
  {path:"composition", component: PeopleListComponent},
  {path:"observable", component: ObservableComponent},
  {path:"**", component: NotFoundComponent},
];
export const router = RouterModule.forRoot(routes);