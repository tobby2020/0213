import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T0006Component } from './t0006.component';

describe('T0006Component', () => {
  let component: T0006Component;
  let fixture: ComponentFixture<T0006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T0006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T0006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
