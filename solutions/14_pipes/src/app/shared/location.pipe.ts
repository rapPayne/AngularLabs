import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value.match(/^\d{2}[A-Z]\d[A-Z]$/)) return value;
    const location: string = value;
    const aisle = location.substring(0, 2);
    const bay = location.substring(2, 3);
    const shelf = location.substring(3, 4);
    const bin = location.substring(4, 5);
    return "Aisle " + aisle + ", Bay " + bay + ", Shelf " + shelf + ", Bin " + bin;
  }

}
