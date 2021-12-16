import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'demo-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  noImageSrc="https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png";

  @Input()
  person;
  @Output()
  delete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  deletePerson(person) {
    console.log("deleting", person);
    this.delete.emit(person);
  }

}
