/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CitySortService } from './citySort.service';

describe('Service: CitySort', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitySortService]
    });
  });

  it('should ...', inject([CitySortService], (service: CitySortService) => {
    expect(service).toBeTruthy();
  }));
});
