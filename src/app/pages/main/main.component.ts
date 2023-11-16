import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { WhenComponent } from '../1-when/when.component';
import { IdleComponent } from '../2-idle/idle.component';
import { ImmediateComponent } from '../3-immediate/immediate.component';
import { TimerComponent } from '../4-timer/timer.component';
import { ViewportComponent } from '../5-viewport/viewport.component';
import { InteractionComponent } from '../6-interaction/interaction.component';
import { HoverComponent } from '../7-hover/hover.component';
import { PrefetchComponent } from '../8-prefetch/prefetch.component';
import { TestsComponent } from '../9-tests/tests.component';

@Component({
  selector: 'dc-main',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    WhenComponent,
    IdleComponent,
    ImmediateComponent,
    TimerComponent,
    ViewportComponent,
    InteractionComponent,
    HoverComponent,
    PrefetchComponent,
    TestsComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {
  page = signal('');

  setPage(page: string) {
    this.page.set(page);
  }
}
