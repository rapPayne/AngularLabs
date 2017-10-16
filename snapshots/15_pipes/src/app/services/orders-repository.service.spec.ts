import { TestBed, inject } from '@angular/core/testing';

import { OrdersRepositoryService } from './orders-repository.service';

describe('OrdersRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersRepositoryService]
    });
  });

  it('should be created', inject([OrdersRepositoryService], (service: OrdersRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
