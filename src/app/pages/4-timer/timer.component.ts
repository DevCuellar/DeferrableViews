import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { interval, Subscription } from 'rxjs';
import { CatComponent } from '../../components/cat/cat.component';

@Component({
  selector: 'dc-timer',
  standalone: true,
  imports: [CommonModule, CatComponent],
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit, OnDestroy {
  counter = signal(3);

  private countdownSubscription: Subscription | undefined;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    const source = interval(1000);
    this.countdownSubscription = source.subscribe(() => {
      this.counter.update(c => c = c-1);

      if (this.counter() === 0) {
        this.stopCountdown();
      }
    });
  }

  stopCountdown() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}
