import { TestBed } from '@angular/core/testing';

import { VerifyotpService } from './verifyotp.service';

describe('VerifyotpService', () => {
  let service: VerifyotpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyotpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
