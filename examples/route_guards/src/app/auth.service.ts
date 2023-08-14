import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { User } from './User.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: WritableSignal<User | undefined> = signal(undefined)
  loggedIn = computed(() => this.user() ? true : false)
  constructor(private _router: Router) { }

  /**
   * Pretends to fetch an identity. Any username/password combo works.
   * @param username
   * @param password
   */
  login(username = "", password = "") {
    this.user.set({ username, first: "Jo", role: username === "admin" ? "admin" : "user" })
  }

  /**
   * Pretends to log the user out by setting user to undefined
   */
  logout() {
    this.user.set(undefined);
    this._router.navigate(['/']);
  }
}
