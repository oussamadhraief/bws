import { TestBed } from '@angular/core/testing';

import { TanksService } from './tanks.service';

describe('TanksService', () => {
  let service: TanksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TanksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
