import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalendar } from './new-calendar';

describe('NewCalendar', () => {
  let component: NewCalendar;
  let fixture: ComponentFixture<NewCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
