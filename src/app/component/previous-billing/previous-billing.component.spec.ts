import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousBillingComponent } from './previous-billing.component';

describe('PreviousBillingComponent', () => {
  let component: PreviousBillingComponent;
  let fixture: ComponentFixture<PreviousBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
