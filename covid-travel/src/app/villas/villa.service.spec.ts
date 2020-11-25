import { TestBed } from '@angular/core/testing';

import { VillaService } from './villa.service';

describe('VillaService', () => {
  let service: VillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
