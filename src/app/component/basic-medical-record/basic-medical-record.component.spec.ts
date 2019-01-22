import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMedicalRecordComponent } from './basic-medical-record.component';

describe('BasicMedicalRecordComponent', () => {
  let component: BasicMedicalRecordComponent;
  let fixture: ComponentFixture<BasicMedicalRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMedicalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
