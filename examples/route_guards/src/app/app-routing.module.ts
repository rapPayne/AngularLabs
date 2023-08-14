import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent, AllSecretsComponent, ContactComponent, HomeComponent, LoginComponent, LogoutComponent, MySecretsComponent } from './other.component';
import { isLoggedInGuard } from './is-logged-in.guard';
import { isAdminUserGuard } from './is-admin-user.guard';

const routes: Route[] = [
  { title: "Route guard demo app", path: "", component: HomeComponent },
  { title: "About", path: "about", component: AboutComponent },
  { title: "Contact", path: "contact", component: ContactComponent },
  { title: "Login", path: "login", component: LoginComponent },
  { title: "Logout", path: "logout", component: LogoutComponent },
  { title: "My secrets", path: "my-secrets", component: MySecretsComponent, canActivate: [isLoggedInGuard] },
  { title: "All secrets", path: "all-secrets", component: AllSecretsComponent, canActivate: [isLoggedInGuard, isAdminUserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
