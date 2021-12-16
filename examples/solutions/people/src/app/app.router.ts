import { RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { AboutUsComponent } from './other/about-us.component';
import { ContactUsComponent } from './other/contact-us.component';
import { PeopleComponent } from './people/people.component';

const routes = [
  { path: "", component: LandingComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "people", component: PeopleComponent },
];

export const routing = RouterModule.forRoot(routes);
