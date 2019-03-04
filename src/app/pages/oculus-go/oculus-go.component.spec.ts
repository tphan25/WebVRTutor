import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OculusGoComponent } from './oculus-go.component';

describe('OculusGoComponent', () => {
  let component: OculusGoComponent;
  let fixture: ComponentFixture<OculusGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OculusGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OculusGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
