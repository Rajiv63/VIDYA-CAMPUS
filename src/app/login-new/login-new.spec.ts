import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNew } from './login-new';

describe('LoginNew', () => {
  let component: LoginNew;
  let fixture: ComponentFixture<LoginNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
