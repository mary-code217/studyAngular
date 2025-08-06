import { Component, inject, OnInit, Output, signal } from '@angular/core';
import { TimeDisplayComponent } from '../time-display/time-display.component';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  private timeService = inject(TimerService);

  start() {
    this.timeService.start();
    console.log('타이머 시작');
  }

  stop() {
    this.timeService.stop();
    console.log('타이머 중지');
  }

  reset() {
    this.timeService.reset();
    console.log('타이머 리셋');
  }

  ngOnInit() {
    console.log('컴포넌트 시작!');
  }

  ngOnDestroy() {
    this.timeService.stop();
    console.log('컴포넌트 파괴!');
  }
}
