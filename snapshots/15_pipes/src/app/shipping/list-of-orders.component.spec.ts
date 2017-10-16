import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOrdersComponent } from './list-of-orders.component';

describe('ListOfOrdersComponent', () => {
  let component: ListOfOrdersComponent;
  let fixture: ComponentFixture<ListOfOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
