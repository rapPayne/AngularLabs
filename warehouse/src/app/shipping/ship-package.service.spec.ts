/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShipPackageService } from './ship-package.service';

describe('ShipPackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipPackageService]
    });
  });

  it('should ...', inject([ShipPackageService], (service: ShipPackageService) => {
    expect(service).toBeTruthy();
  }));
});
