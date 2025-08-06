import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-time-display',
  standalone: true,
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit {
  private timeService = inject(TimerService);
  protected readonly time: Signal<number> = this.timeService.time;

  ngOnInit() {}
}
