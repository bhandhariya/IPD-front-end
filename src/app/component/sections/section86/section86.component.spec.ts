import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section86Component } from './section86.component';

describe('Section86Component', () => {
  let component: Section86Component;
  let fixture: ComponentFixture<Section86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
