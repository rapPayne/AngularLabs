import { Injectable } from '@angular/core';
import { User } from '../shared/User';

@Injectable()
export class LoginService {
    user: User;

    authenticate(username:string, password:string):boolean
    {
	if (username == "student" && password == "tra1n1ng")
	{
	    this.user = <User> {'userid': 1, 'userName': username, 'firstName': "Angular", 'lastName': "Student", 'password': password };
	    return true;
	}
	else return false;
    }

    constructor() { }
}
