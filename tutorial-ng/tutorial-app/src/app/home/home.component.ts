import { Component, computed, effect, inject, signal } from '@angular/core';
import { HousingLocationComponent } from '../housingLocation/housingLocation.component';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HousingLocationComponent, FormsModule],
})
export class HomeComponent {
  private housingService = inject(HousingService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // 원본 리스트
  housingList = signal<HousingLocationInfo[]>([]);

  // 인풋과 바인딩할 로컬 상태 (타이핑 시 여기만 변함)
  searchText = '';

  // 뒤/앞으로 가기 등으로 URL이 바뀌면 인풋 값 동기화
  sync = effect(() => {
    this.searchText = this.search();
  });

  // URL의 ?search= 를 시그널로
  search = toSignal(
    this.route.queryParamMap.pipe(map((p) => (p.get('search') ?? '').trim())),
    { initialValue: '' }
  );

  // 필터된 리스트(자동 계산)
  filteredLocationList = computed(() => {
    const list = this.housingList();
    const q = this.search().toLowerCase();
    return q ? list.filter((h) => h.city.toLowerCase().includes(q)) : list;
  });

  // 생성자를 통해서 원본 리스트에 api리스트 담아주기
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((list) => this.housingList.set(list));
  }

  onSearch(q: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: q.trim() || null },
      queryParamsHandling: 'merge',
    });
  }
}
