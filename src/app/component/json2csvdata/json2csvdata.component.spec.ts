import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Json2csvdataComponent } from './json2csvdata.component';

describe('Json2csvdataComponent', () => {
  let component: Json2csvdataComponent;
  let fixture: ComponentFixture<Json2csvdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Json2csvdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Json2csvdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
