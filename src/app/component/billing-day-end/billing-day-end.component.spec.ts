import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDayEndComponent } from './billing-day-end.component';

describe('BillingDayEndComponent', () => {
  let component: BillingDayEndComponent;
  let fixture: ComponentFixture<BillingDayEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDayEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDayEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
