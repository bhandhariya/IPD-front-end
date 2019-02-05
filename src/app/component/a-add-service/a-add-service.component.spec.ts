import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAddServiceComponent } from './a-add-service.component';

describe('AAddServiceComponent', () => {
  let component: AAddServiceComponent;
  let fixture: ComponentFixture<AAddServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAddServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
