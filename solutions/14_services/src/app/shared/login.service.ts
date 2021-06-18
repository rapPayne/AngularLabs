import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn: boolean = false;
  user: { userid?: number, username?: string, password?: string, givenName?: string, familyName?: string }
    = { userid: undefined, password: "", givenName: "", familyName: "" };
  constructor() {
  }

  // Pretend to authenticate here. In the final product, we'd put
  // real authentication logic here.
  authenticate() {
    this.loggedIn = true;
    this.user.userid = 123;
    this.user.username = "joKim";
    this.user.givenName = "Jo";
    this.user.familyName = "Kim";
  }
}
