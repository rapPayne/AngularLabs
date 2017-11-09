import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[social-security-number]'
})
export class SSNValidatorDirective {

  constructor() { 
    console.log('applied');
  }
  
  validate(control) {
    console.log('validating')
  }
}
