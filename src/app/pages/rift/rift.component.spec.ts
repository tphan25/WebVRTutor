import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftComponent } from './rift.component';

describe('RiftComponent', () => {
  let component: RiftComponent;
  let fixture: ComponentFixture<RiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
