import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './shared/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northwind Traders Warehouse Management';
  user?: User;

  constructor(public authSvc: AuthService) { }

  ngOnInit() {
    this.user = this.authSvc.user;
  }
}
