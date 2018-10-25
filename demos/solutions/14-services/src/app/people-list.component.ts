import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers: [ PeopleService ]
})
export class PeopleListComponent implements OnInit {
  people:Array<any>;
  showCoolStuff:boolean=false;

  constructor(private _pplService:PeopleService) { }

  ngOnInit() {
    this.getPeople();
    console.log(this.people);
  }

  deletePerson(person) {
    console.log(person);
    this.people = this.people.filter(p => p !== person);
  }

  getPeople(numberOfPeople:number = 20) {
    this._pplService.getPeople(numberOfPeople)
    .subscribe(
      (res) => { this.people = res.json().results},
      (err) => { console.error('Oh noes!', err)}
    );
  }
}
