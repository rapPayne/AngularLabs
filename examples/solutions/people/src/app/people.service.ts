import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = `https://randomuser.me/api`;
  constructor(private _client: HttpClient) { }

  getPeople(numberOfPeople = 10): any {
    const people$ = this._client.get(`${this.url}?results=${numberOfPeople}`);
    return people$;
  }
}
