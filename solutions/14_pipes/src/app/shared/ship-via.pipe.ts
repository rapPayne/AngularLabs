import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shipVia'
})
export class ShipViaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const shippers = [
      "invalid", "Federal Express", "UPS", "US Postal Service",
    ];
    return shippers[value];
  }

}
