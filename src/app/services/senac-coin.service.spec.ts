import { TestBed } from '@angular/core/testing';

import { SenacCoinService } from './senac-coin.service';

describe('SenacCoinService', () => {
  let service: SenacCoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenacCoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
