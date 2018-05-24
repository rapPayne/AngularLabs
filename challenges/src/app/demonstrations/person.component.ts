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
  remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeSelf(person) {
    this.remove.emit(person);
    console.log("removing ", person)
  }

}
