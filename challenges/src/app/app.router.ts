import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';
import { PeopleListComponent } from './demonstrations/people-list.component';

const routes = [
  {path:"", component: WelcomeComponent},
  {path:"demo", component: PeopleListComponent},
  {path:"**", component: NotFoundComponent},
];
export const router = RouterModule.forRoot(routes);