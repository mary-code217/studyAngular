import { Component, effect, inject, Injector, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  private animalService = inject(AnimalService);
  private injector = inject(Injector);

  photos = this.animalService.photos;
  private currentTab = this.animalService.tabName();

  constructor() {
    effect(() => {
      const currentTab = this.animalService.tabName();

      this.animalService.getPhotos(currentTab);
      console.log(currentTab);
    })
  }

  ngOnInit() {

  }
}
