import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationExpand'
})
export class LocationExpandPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (! /^\d{2}[A-Z]\d[A-Z]$/.test(value))
      return value;
    let formatted = "Aisle " + value.slice(0,2) + " Bay " + value.slice(2,3) + " Shelf " + value.slice(3,4) + " Bin " + value.slice(4,5);
    return formatted;
  }

}
