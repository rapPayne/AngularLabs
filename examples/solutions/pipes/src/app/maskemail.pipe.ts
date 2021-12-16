import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskemailPipe implements PipeTransform {

  transform(value: string): string {

    const first = value.slice(0,1);
    console.log(first);
    return `${first}*******`;
  }

}
