import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmrComponent } from './wmr.component';

describe('WmrComponent', () => {
  let component: WmrComponent;
  let fixture: ComponentFixture<WmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
