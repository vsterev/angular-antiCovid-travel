import { TestBed } from '@angular/core/testing';

import { AuthLoggedGuard } from './auth-logged.guard';

describe('AuthLoggedGuard', () => {
  let guard: AuthLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
