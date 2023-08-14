import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route_guards';
  constructor(public authSvc: AuthService) {
  }

  ngDoCheck() {
    console.log({ loggedIn: this.authSvc.loggedIn(), user: this.authSvc.user(), time: new Date(), })
  }
}
