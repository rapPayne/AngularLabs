import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people;
  
  constructor(private _peopleSvc:PeopleService) {}

  ngOnInit() {
    //this.getPeople(10);
  }

  getPeople(totalPeople) {
    this.people = this._peopleSvc.getPeople(totalPeople);
  }

  deletePerson(thePerson) {
    this.people = this.people.filter(p => p !== thePerson);
  }
}
