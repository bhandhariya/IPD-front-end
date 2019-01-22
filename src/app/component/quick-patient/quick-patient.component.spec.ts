import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPatientComponent } from './quick-patient.component';

describe('QuickPatientComponent', () => {
  let component: QuickPatientComponent;
  let fixture: ComponentFixture<QuickPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
