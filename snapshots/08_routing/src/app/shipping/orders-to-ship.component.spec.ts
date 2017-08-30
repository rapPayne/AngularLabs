import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersToShipComponent } from './orders-to-ship.component';

describe('OrdersToShipComponent', () => {
  let component: OrdersToShipComponent;
  let fixture: ComponentFixture<OrdersToShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersToShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersToShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
