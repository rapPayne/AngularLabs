import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationExpand'
})
export class LocationExpandPipe implements PipeTransform {

    transform(value: any, args?: any): any {
	const location:string = value;
	const aisle = location.substring(0, 2);
	const bay = location.substring(2,3);
	const shelf = location.substring(3,4);
	const bin = location.substring(4,5);
	return "Aisle " + aisle + ", Bay " + bay + ", Shelf " + shelf + ", Bin " + bin;
    }
}
