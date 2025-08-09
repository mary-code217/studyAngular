import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housingLocation',
  templateUrl: './housingLocation.component.html',
  styleUrls: ['./housingLocation.component.css'],
  imports: [RouterModule],
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>();
}
