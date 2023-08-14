import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  standalone: true,
  template: `<h1>Home</h1>`,
})
export class HomeComponent { }

@Component({
  standalone: true,
  template: `<h1>About</h1>`,
})
export class AboutComponent { }

@Component({
  standalone: true,
  template: `<h1>Contact</h1>`,
})
export class ContactComponent { }

@Component({
  standalone: true,
  template: `
  <h1>Login</h1>
  <label for="username">username</label>
  <input #username />
  <button (click)="authSvc.login(username.value,'secretPassword')">Log in</button>
  `,
})
export class LoginComponent {
  constructor(public authSvc: AuthService) { }
}

@Component({
  standalone: true,
  template: `<h1>Logout</h1>`,
})
export class LogoutComponent {
  constructor(public authSvc: AuthService) { }
  ngOnInit() {
    this.authSvc.logout();
  }
}

@Component({
  standalone: true,
  template: `<h1>My secrets</h1>`,
})
export class MySecretsComponent { }

@Component({
  standalone: true,
  template: `<h1>AllSecrets</h1>`,
})
export class AllSecretsComponent { }
