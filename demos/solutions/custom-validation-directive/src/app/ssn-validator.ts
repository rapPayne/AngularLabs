import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[social-security-number]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: SSNValidatorDirective, multi: true }
  ]
})
export class SSNValidatorDirective implements Validator {
  validate(control) {
    console.log(NG_VALIDATORS);
    if (!control.value || control.value === '123-45-6789' || ! control.value.match(/^\d{3}-\d{2}-\d{4}$/))
      return { ssn: true };
    else
      return null;
  }
}
