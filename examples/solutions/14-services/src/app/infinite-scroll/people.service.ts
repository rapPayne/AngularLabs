import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PeopleService {

  constructor(private httpClient:Http) { }

  getPeople(numberOfPeople:number=10) {
    return this.httpClient.get(`https://randomuser.me/api/?results=${numberOfPeople}`);
  }
}
