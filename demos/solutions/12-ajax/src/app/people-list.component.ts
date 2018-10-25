import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people;
  constructor(private _http: HttpClient) {
    this.people = people;
    console.log(this.people);
  }

  ngOnInit() {
    this.getPeople(10);
  }

  getPeople(totalPeople) {
    const url = `https://randomuser.me/api?results=${totalPeople}`;
    this._http.get(url).toPromise().then(
      (data:any) => {
        console.log(data);
        this.people = data.results;
      },
      console.error
    )
  }

  deletePerson(thePerson) {
    this.people = this.people.filter(p => p !== thePerson);
  }
}
