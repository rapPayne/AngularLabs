import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'nw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  user?: { userid?: number, username?: string, password?: string, givenName?: string, familyName?: string };
  message?: string;

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this._loginService.user;
  }

  login() {
    this._loginService.authenticate();
    this.message = `You're logged in, ${this.user?.givenName}.`;
  }
}
