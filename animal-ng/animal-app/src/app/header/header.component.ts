import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  private route = inject(ActivatedRoute);

  currentTab = toSignal(
    this.route.paramMap.pipe(
      map((p) => (p.get('category') === 'all' ? '' : p.get('category')) ?? ''),
      distinctUntilChanged()
    ),
    { initialValue: '' }
  );
}
