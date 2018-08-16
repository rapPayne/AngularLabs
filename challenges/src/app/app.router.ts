import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';
import { PeopleListComponent } from './demonstrations/people-list.component';
import { ObservableComponent} from './solutions/13-observables/observable.component';

const routes = [
  {path:"", component: WelcomeComponent},
  {path:"demo", component: PeopleListComponent},
  {path:"observables", component: ObservableComponent},
  {path:"**", component: NotFoundComponent},
];
export const router = RouterModule.forRoot(routes);