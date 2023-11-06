import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaceService {

  constructor() { }

  /**
   * Returns the pace as a decimal number. Units depend on the inputs and can be anything.
   * @param distance Any unit (miles, kilometers, meters, feet)
   * @param duration Any unit (minutes, seconds, hours)
   * @returns Average pace in units of durationUnits/distanceUnits
   */
  calcPace(distance: number, duration: number): number {
    return duration / distance;
  }

  getMinutesFromTimeString(timeString: string) {
    const parts = timeString.split(":");
    switch (parts.length) {
      case 2:
        return (+parts[0]) + (+parts[1] / 60);
      case 3:
        return (+parts[0] * 60) + (+parts[1]) + (+parts[2] / 60);
      default:
        throw new Error(`'${timeString}' doesn't look like a time to me.`);
    }
    // Could be refactored to the below and still pass tests.
    // const match = timeString.match(/(\d{1,2}):(\d{1,2}):(\d{1,2})/)
    // if (match) {
    //   const [, hours, minutes, seconds] = match!;
    //   return (+hours * 60) + (+minutes) + (+seconds / 60);
    // } else {
    //   const match = timeString.match(/(\d{1,2}):(\d{1,2})/)
    //   const [, minutes, seconds] = match!;
    //   return (+minutes) + (+seconds / 60);
    // }
  }
}
