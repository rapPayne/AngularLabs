import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  private people = [];

  constructor() { }

  ngOnInit() {
    this.people = people;
    console.log(this.people[0]);
  }

  deletePerson(person) {
    this.people = this.people.filter(p => p !== person);
  }
}
