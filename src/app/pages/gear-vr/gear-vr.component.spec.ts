import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearVRComponent } from './gear-vr.component';

describe('GearVRComponent', () => {
  let component: GearVRComponent;
  let fixture: ComponentFixture<GearVRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearVRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearVRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
