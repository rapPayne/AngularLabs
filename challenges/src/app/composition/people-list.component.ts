import { Component, OnInit } from '@angular/core';
import { people } from '../../assets/people';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
