import { TestBed } from '@angular/core/testing';

import { DolarBlueServiceService } from './dolar-blue-service.service';

describe('DolarBlueServiceService', () => {
  let service: DolarBlueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarBlueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
