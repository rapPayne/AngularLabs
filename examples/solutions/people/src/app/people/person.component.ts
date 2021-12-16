import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input()
  person;
  constructor() { }

  ngOnInit(): void {
  }

  selectThisPerson(person) {
    person.selected = !person.selected;
  }
}
