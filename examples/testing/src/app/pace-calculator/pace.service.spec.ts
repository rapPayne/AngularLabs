import { TestBed } from '@angular/core/testing';

import { PaceService } from './pace.service';

describe('PaceService', () => {
  let service: PaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate paces (minutes/mile) given durations and distances', () => {
    //Arrange
    const goodPaces = [
      { distance: 10, duration: 80, pace: 8 },
      { distance: 26.2118, duration: 223, pace: 8.5076 },
      { distance: 13.1, duration: 120, pace: 9.16 },
      { distance: 6.214, duration: 60, pace: 9.6556 },
      { distance: 3.107, duration: 20, pace: 6.44 },
    ]
    goodPaces.forEach(gp => {
      //Act
      const pace = service.calcPace(gp.distance, gp.duration);
      //Assert
      expect(pace).toBeCloseTo(gp.pace, 2);  // rounded to 1/100
    })
  })

  it('can convert hh:mm:ss to minutes', () => {
    const times = [
      { string: '03:43:30', minutes: 223.5 },
      { string: '1:5:0', minutes: 65.0 },
      { string: '10:0:0', minutes: 600 },
    ]
    times.forEach(time => {
      // Act
      const minutes = service.getMinutesFromTimeString(time.string);
      // Assert
      expect(minutes).toBeCloseTo(time.minutes, 2)
    })
  })

  it('can convert mm:ss to minutes', () => {
    const times = [
      { string: '45:30', minutes: 45.5 },
      { string: '21:15', minutes: 21.25 },
      { string: '9:5', minutes: 9.0833 },
    ]
    times.forEach(time => {
      // Act
      const minutes = service.getMinutesFromTimeString(time.string);
      // Assert
      expect(minutes).toBeCloseTo(time.minutes, 2)
    })
  })

});
