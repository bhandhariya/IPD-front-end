import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseInstructionScreenComponent } from './nurse-instruction-screen.component';

describe('NurseInstructionScreenComponent', () => {
  let component: NurseInstructionScreenComponent;
  let fixture: ComponentFixture<NurseInstructionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseInstructionScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseInstructionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
