/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CitySearchService } from './citySearch.service';

describe('Service: CitySearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitySearchService]
    });
  });

  it('should ...', inject([CitySearchService], (service: CitySearchService) => {
    expect(service).toBeTruthy();
  }));
});
