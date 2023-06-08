import { TestBed } from '@angular/core/testing';

import { GuardAdminsGuard } from './guard-admins.guard';

describe('GuardAdminsGuard', () => {
  let guard: GuardAdminsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardAdminsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
