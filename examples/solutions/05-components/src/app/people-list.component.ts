import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people;
  constructor() { 
    this.people = people;
    console.log(this.people);
  }

  ngOnInit() {

  }

}
