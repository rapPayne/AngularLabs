import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup(
      { firstName: new FormControl("Joe") }
    );
  }
  //firstNameFC: FormControl = new FormControl("")
  //firstname?: string;
  doSubmit() {
    console.log(this.formGroup.value)
  }
}
