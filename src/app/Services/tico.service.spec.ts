import { TestBed } from '@angular/core/testing';

import { TICOService } from './tico.service';

describe('TICOService', () => {
  let service: TICOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TICOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
