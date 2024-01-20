import { TestBed } from '@angular/core/testing';

import { openTripMapService } from './openTripMap.service';

describe('openTripMap', () => {
  let service: openTripMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(openTripMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
