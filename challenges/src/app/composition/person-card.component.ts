import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person;
  @Output()
  removePerson = new EventEmitter();

  _company;
  @Output()
  companyChange = new EventEmitter();
  @Input()
    get company() {
      return this._company;
    }
    set company(value) {
      this._company = value;
      this.companyChange.emit(value);
    }

  constructor() { }

  ngOnInit() {
  }

  deletePerson(person) {
    this.removePerson.emit(person);
  }
}
