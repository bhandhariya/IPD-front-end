import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerprofileComponent } from './managerprofile.component';

describe('ManagerprofileComponent', () => {
  let component: ManagerprofileComponent;
  let fixture: ComponentFixture<ManagerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
