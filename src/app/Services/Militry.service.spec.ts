/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MilitryService } from './Militry.service';

describe('Service: Militry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilitryService]
    });
  });

  it('should ...', inject([MilitryService], (service: MilitryService) => {
    expect(service).toBeTruthy();
  }));
});
