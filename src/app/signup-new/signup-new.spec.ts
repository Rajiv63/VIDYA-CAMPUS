import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupNew } from './signup-new';

describe('SignupNew', () => {
  let component: SignupNew;
  let fixture: ComponentFixture<SignupNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
