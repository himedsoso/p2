import { TestBed } from '@angular/core/testing';

import { HeroesInformationsService } from './heroes-informations.service';

describe('HeroesInformationsService', () => {
  let service: HeroesInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
