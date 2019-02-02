import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopreviewComponent } from './demopreview.component';

describe('DemopreviewComponent', () => {
  let component: DemopreviewComponent;
  let fixture: ComponentFixture<DemopreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemopreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
