import { TestBed } from '@angular/core/testing';

import { PumpsService } from './pumps.service';

describe('PumpsService', () => {
  let service: PumpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
