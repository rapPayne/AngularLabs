import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'nw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private username:string;
    private password:string;
    private message:string = "Please login";

    login()
    {
	if (this.loginService.authenticate(this.username, this.password))
	{
	    this.message = "Successful login!  Welcome, " + this.loginService.user.firstName + " " + this.loginService.user.lastName;
	}
	else
	{
	    this.message = "Invalid login!";
	}
    }

    constructor(private loginService:LoginService) { }

    ngOnInit() {
    }
}
