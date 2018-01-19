import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input()
  person;
  @Output()
  delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletePerson() {
    this.delete.emit(this.person)
  }
}
