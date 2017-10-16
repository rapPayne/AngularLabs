import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shipVia'
})
export class ShipViaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return {'1': "FedEX", '2': "UPS", '3': "US Postal Service"}[value];
  }
}
