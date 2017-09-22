import { Component, OnInit } from '@angular/core';
import { people } from '../../assets/people';
@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {


  people:Array<any>;
  constructor() { }

  ngOnInit() {
    this.people = people;
    console.log(people);
  }

  deletePerson(person) {
    this.people = this.people.filter(p => p.name.first !== person.name.first && p.name.last !== person.name.last);
  }
}
