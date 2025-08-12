import { effect, inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../service/housing.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeFacade {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private housingService = inject(HousingService);

  readonly qFromUrl = toSignal(
    this.route.queryParamMap.pipe(
      map(p => p.get('search') ?? ''),
      distinctUntilChanged()
    ),
    { initialValue: '' }
  );

  constructor() {
    effect(() => this.housingService.setQuery(this.qFromUrl().trim()));
  }

  loadAll() {
    this.housingService.getHousingLocationList();
  }

  updateQuery(q: string) {
    this.router.navigate([], {
      queryParams: { search: q || null },
      queryParamsHandling: 'merge'
    });
  }

  readonly filterList = this.housingService.housingFilterList;

}
