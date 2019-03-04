import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViveComponent } from './vive.component';

describe('ViveComponent', () => {
  let component: ViveComponent;
  let fixture: ComponentFixture<ViveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
