import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {

  private people;

  constructor() { }

  ngOnInit() {
    this.people = people;
  }

}
