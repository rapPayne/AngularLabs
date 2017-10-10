import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  givenName:string;
  ssn:string;
  persons;

  constructor(private _peopleService:PeopleService) { }

  ngOnInit() {
    this.persons = this._peopleService.people;
  }

  processNameAndSSN() {
    console.log(`You said ${this.givenName} and ${this.ssn}.`);
  }

}
