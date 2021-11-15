import { TestBed } from '@angular/core/testing';

import { UniversityWebsiteService } from './university-website.service';

describe('UniversityWebsiteService', () => {
  let service: UniversityWebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityWebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
