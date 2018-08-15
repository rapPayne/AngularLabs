import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people;
  noImageSrc="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png";
  constructor() { 
    this.people = people;
    console.log(this.people);
  }

  ngOnInit() {

  }

  deletePerson(thePerson) {
    this.people = this.people.filter(p => p !== thePerson);
  }
}
