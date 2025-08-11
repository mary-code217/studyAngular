import { Component, inject, OnInit } from '@angular/core';
import { HousingService } from '../../service/housing.service';
import { HousingLocationComponent } from "../housingLocation/housingLocation.component";
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HousingLocationComponent, FormsModule]
})
export class HomeComponent implements OnInit{
  housingService = inject(HousingService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  q = "";

  ngOnInit(): void {
    this.housingService.getHousingLocationList();
  }

  onSearch() {
    this.housingService.setQuery(this.q);
  }

  // housingLocationList = this.housingService.housingLocationList;
}
