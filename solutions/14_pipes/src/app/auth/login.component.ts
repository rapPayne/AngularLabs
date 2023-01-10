import { Component } from '@angular/core';
import { User } from '../shared/User';
import { AuthService } from './auth.service';

@Component({
  selector: 'nw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user?: User;
  message?: string;
  username?: string;
  password?: string;

  constructor(private _authSvc: AuthService) { }

  ngOnInit() {
    this.user = this._authSvc.user;
  }

  login() {
    this._authSvc
      .authenticate(this.username, this.password)
      .subscribe({
        next: user => this.message =
          `Welcome, ${user.givenName}. You're successfully logged in`,
      });
  }
}
