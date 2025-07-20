import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyByOtpAuthenticationComponent } from './verify-by-otp-authentication.component';

describe('VerifyByOtpAuthenticationComponent', () => {
  let component: VerifyByOtpAuthenticationComponent;
  let fixture: ComponentFixture<VerifyByOtpAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyByOtpAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyByOtpAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
