import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-validator-directive',
  templateUrl: './custom-validator-directive.component.html',
  styleUrls: ['./custom-validator-directive.component.css']
})
export class CustomValidatorDirectiveComponent implements OnInit {
  givenName:string;
  ssn:string;
  persons;

  constructor() { }

  ngOnInit() {
  }

  processNameAndSSN() {
    console.log(`You said ${this.givenName} and ${this.ssn}.`);
  }

}
