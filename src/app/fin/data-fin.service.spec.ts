import { TestBed } from '@angular/core/testing';

import { DataFinService } from './data-fin.service';

describe('DataFinService', () => {
  let service: DataFinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
