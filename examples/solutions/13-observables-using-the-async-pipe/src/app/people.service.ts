import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private _httpClient:HttpClient) { }

  getPeople(numberOfPeople):Observable<any> {
    const url = `https://randomuser.me/api?results=${numberOfPeople}`;
    return this._httpClient
    .get(url)
    .pipe(
      map((res:any) => res.results)
    )
  }
}
