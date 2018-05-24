import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';
import { Http } from '@angular/http';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people;
  constructor(private _http:Http) { 
    //this.people = people;
    console.log(this.people);
  }

  ngOnInit() {
    this._http
    .get("https://randomuser.me/api?results=100")
    .toPromise()
    .then(
      (res) => {
        this.people = res.json().results;
      },
      (err) => {console.error(err)}
    );
  }

  removeFromList(person) {
    this.people = this.people.filter(p => p !== person);
  }
}
