import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  givenName:string;
  ssn:string;

  constructor() { }

  ngOnInit() {
  }

  processNameAndSSN() {
    console.log(`You said ${this.givenName} and ${this.ssn}.`);
  }

}
