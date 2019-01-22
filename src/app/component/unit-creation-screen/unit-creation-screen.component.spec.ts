import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCreationScreenComponent } from './unit-creation-screen.component';

describe('UnitCreationScreenComponent', () => {
  let component: UnitCreationScreenComponent;
  let fixture: ComponentFixture<UnitCreationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitCreationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCreationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
