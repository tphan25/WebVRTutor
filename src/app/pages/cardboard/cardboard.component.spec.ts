import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboardComponent } from './cardboard.component';

describe('CardboardComponent', () => {
  let component: CardboardComponent;
  let fixture: ComponentFixture<CardboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
