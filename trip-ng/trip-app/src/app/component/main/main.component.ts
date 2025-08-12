import { Component, inject, OnInit } from '@angular/core';
import { CityApiService } from '../../service/cityApi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cityApiService = inject(CityApiService);

  ngOnInit() {
    this.cityApiService.getCities();
  }

  readonly cities = this.cityApiService.cities;

}
