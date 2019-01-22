import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGComponent } from './form-g.component';

describe('FormGComponent', () => {
  let component: FormGComponent;
  let fixture: ComponentFixture<FormGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
