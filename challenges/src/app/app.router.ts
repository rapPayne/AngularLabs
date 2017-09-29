import { RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { PeopleListComponent } from './composition/people-list.component';
import { ObservableComponent } from './observable/observable.component';

const routes = [
  {path:"ajax", component: AjaxPeopleListComponent},
  {path:"forms", component: FormsDemoComponent},
  {path:"composition", component: PeopleListComponent},
  {path:"observable", component: ObservableComponent}
];
export const router = RouterModule.forRoot(routes);