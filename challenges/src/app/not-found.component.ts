import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-not-found',
  template: `<h1>Not Found</h1><p>You asked for something that doesn't exist yet.</p>`,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
