import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABillingComponent } from './a-billing.component';

describe('ABillingComponent', () => {
  let component: ABillingComponent;
  let fixture: ComponentFixture<ABillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
