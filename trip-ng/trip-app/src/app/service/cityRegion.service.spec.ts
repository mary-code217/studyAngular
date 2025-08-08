/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityRegionService } from './cityRegion.service';

describe('Service: CityRegion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityRegionService]
    });
  });

  it('should ...', inject([CityRegionService], (service: CityRegionService) => {
    expect(service).toBeTruthy();
  }));
});
