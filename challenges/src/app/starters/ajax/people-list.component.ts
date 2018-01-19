import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  private people = [];
  
  constructor(private _http:Http) { }

  ngOnInit() {
    //this.people = people;
    this.getRandomPeople(16);
    console.log(this.people[0]);
  }

  deletePerson(person) {
    this.people = this.people.filter(p => p !== person);
  }

  getRandomPeople(numberOfPeople) {
    this._http
    .get(`https://randomuser.me/api/?results=${numberOfPeople}`)
    .toPromise()
    .then(
      (res) => {
        this.people = res.json().results;
        console.log(this.people);
      },
      error => console.error(error)
    );


  }
}
