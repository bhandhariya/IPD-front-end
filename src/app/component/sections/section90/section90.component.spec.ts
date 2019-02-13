import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section90Component } from './section90.component';

describe('Section90Component', () => {
  let component: Section90Component;
  let fixture: ComponentFixture<Section90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
