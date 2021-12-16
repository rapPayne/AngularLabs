import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  public newPerson: any = {};
  rightNow = new Date();
  @Output()
  addNewPerson = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.newPerson.name = { first: "", last: "" };
    this.newPerson.location = { city: "" };
  }
  addPerson(person) {
    // Emit the addPerson event
    this.addNewPerson.emit(person);
  }
}
