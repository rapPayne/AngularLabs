import { RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { PeopleListComponent } from './composition/people-list.component';

const routes = [
  {path:"ajax", component: AjaxPeopleListComponent},
  {path:"forms", component: FormsDemoComponent},
  {path:"composition", component: PeopleListComponent}
];
export const router = RouterModule.forRoot(routes);