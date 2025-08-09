import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housingLocation/housingLocation.component';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HousingLocationComponent],
})
export class HomeComponent {
  housingLocationList: HousingLocationInfo[] = [];
  housingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
