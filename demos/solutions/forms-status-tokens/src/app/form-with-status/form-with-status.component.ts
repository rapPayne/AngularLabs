import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-with-status',
  templateUrl: './form-with-status.component.html',
  styleUrls: ['./form-with-status.component.css']
})
export class FormWithStatusComponent implements OnInit {
  first = "";
  constructor() { }

  ngOnInit() {
  }

  updateFirst() {
    this.first="Foo";
  }

  resetFirst(theForm) {
    theForm.reset();
  }

  makeFirstPristineAndUntouchedAgain(theForm) {
    theForm.form.markAsPristine();
    theForm.form.markAsUntouched();
  }
}
