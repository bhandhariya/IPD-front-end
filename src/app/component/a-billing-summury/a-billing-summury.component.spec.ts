import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABillingSummuryComponent } from './a-billing-summury.component';

describe('ABillingSummuryComponent', () => {
  let component: ABillingSummuryComponent;
  let fixture: ComponentFixture<ABillingSummuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABillingSummuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABillingSummuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
