import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFComponent } from './form-f.component';

describe('FormFComponent', () => {
  let component: FormFComponent;
  let fixture: ComponentFixture<FormFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
