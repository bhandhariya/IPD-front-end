import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDComponent } from './form-d.component';

describe('FormDComponent', () => {
  let component: FormDComponent;
  let fixture: ComponentFixture<FormDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
