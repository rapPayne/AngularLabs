import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaceService {

  constructor() { }

  /**
   *
   * @param distance Any unit (miles, kilometers, meters, feet)
   * @param duration Any unit (minutes, seconds, hours)
   * @returns Average pace in units of durationUnits/distanceUnits
   */
  calcPace(distance: number, duration: number): number {
    return duration / distance;
  }

  getMinutesFromTimeString(timeString: string) {
    const match = timeString.match(/(\d{1,2}):(\d{1,2}):(\d{1,2})/)
    if (match) {
      const [, hours, minutes, seconds] = match!;
      return (+hours * 60) + (+minutes) + (+seconds / 60);
    } else {
      const match = timeString.match(/(\d{1,2}):(\d{1,2})/)
      const [, minutes, seconds] = match!;
      return (+minutes) + (+seconds / 60);
    }
  }
}
