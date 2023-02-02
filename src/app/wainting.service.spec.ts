import { TestBed } from '@angular/core/testing';

import { WaintingService } from './wainting.service';

describe('WaintingService', () => {
  let service: WaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
