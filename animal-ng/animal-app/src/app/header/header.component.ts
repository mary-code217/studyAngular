import { Component, inject } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private animalService = inject(AnimalService);
  private router = inject(Router);

  currentTab = this.animalService.tabName;

  onClick(event:Event) {
    const id = (event.target as HTMLElement).id;
    this.animalService.setTabName(id === "all" ? "" : id);
    // this.router.navigate([`/${id === "all" ? "" : id}`]);
    this.router.navigate([`/${id}`]);
  }
}
