import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section89Component } from './section89.component';

describe('Section89Component', () => {
  let component: Section89Component;
  let fixture: ComponentFixture<Section89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section89Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
