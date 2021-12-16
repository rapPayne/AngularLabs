import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-eager',
  templateUrl: './eager.component.html',
})
export class EagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Eager component loaded")
  }

}
