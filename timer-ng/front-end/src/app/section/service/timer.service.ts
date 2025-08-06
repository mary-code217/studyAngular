import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TimerService {
  seconds = signal(0); // 타이머 시간 상태
  isRunning = signal(false); // 타이머 현재 상태 true면 작동중
  private timerId: any = 0;

  start() {
    if (!this.isRunning()) {
      this.isRunning.set(true);

      this.timerId = setInterval(() => {
        this.seconds.update((sec) => sec + 1);
      }, 1000);
    }
  }

  stop() {
    this.isRunning.set(false);
    clearInterval(this.timerId);
  }

  reset() {
    this.stop();
    this.seconds.set(0);
  }

  get time() {
    return this.seconds.asReadonly();
  }
}
