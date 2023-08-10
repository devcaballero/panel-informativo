import { TestBed } from '@angular/core/testing';

import { NaftaServiceService } from './nafta-service.service';

describe('NaftaServiceService', () => {
  let service: NaftaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaftaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
