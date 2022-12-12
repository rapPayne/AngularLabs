import { Component } from '@angular/core';

@Component({
  selector: 'generic',
  template: `
    <h1>
      A generic component. You can ignore me. Nothing to see here.
    </h1>
    <a [routerLink]="'/numbers'">Numbers</a>
  `
})
export class GenericComponent {

}
