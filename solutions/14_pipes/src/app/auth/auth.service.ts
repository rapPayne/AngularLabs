import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { User } from '../shared/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  user?: User;

  constructor(private _http: HttpClient) { }

  authenticate(username?: string, password?: string): Observable<User> {
    return this._http.get<Array<User>>(`/api/login/${username}/${password}`)
      .pipe(
        map(users => users[0]),
        tap(user => this.user = user),
        tap((users) => this.loggedIn = true)
      )
  }
}
