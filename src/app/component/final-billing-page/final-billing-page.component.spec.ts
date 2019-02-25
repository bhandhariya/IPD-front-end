import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBillingPageComponent } from './final-billing-page.component';

describe('FinalBillingPageComponent', () => {
  let component: FinalBillingPageComponent;
  let fixture: ComponentFixture<FinalBillingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBillingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
