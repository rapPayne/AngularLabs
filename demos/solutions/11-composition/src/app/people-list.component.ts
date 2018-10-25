import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people:Array<any>;
  showCoolStuff:boolean=false;

  constructor() { }

  ngOnInit() {
    this.people = people;
    console.log(people);
  }

  deletePerson(person) {
    console.log(person);
    this.people = this.people.filter(p => p !== person);
  }
}
