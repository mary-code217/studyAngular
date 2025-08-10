import { Component, effect, inject } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  private animalService = inject(AnimalService);
  private route = inject(ActivatedRoute);

  tab = toSignal(
    this.route.paramMap.pipe(
      map((p) => (p.get('category') === 'all' ? '' : p.get('category')) ?? ''),
      distinctUntilChanged()
    ),
    { initialValue: '' }
  );

  fetchOnTabChange = effect(() => {
    this.animalService.getPhotos(this.tab());
  });

  photos = this.animalService.photos;
}
