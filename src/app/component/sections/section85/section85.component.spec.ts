import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section85Component } from './section85.component';

describe('Section85Component', () => {
  let component: Section85Component;
  let fixture: ComponentFixture<Section85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
