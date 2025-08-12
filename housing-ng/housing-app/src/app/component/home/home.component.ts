import { Component, inject, OnInit } from '@angular/core';
import { HousingLocationComponent } from "../housingLocation/housingLocation.component";
import { FormsModule } from '@angular/forms';
import { HomeFacade } from './homeFacade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HousingLocationComponent, FormsModule]
})
export class HomeComponent implements OnInit{
  facade = inject(HomeFacade);

  ngOnInit(): void {
    this.facade.loadAll();
  }

  onSearch(q: string) {
    this.facade.updateQuery(q);
  }
}
