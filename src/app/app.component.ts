import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'dc-root',
  standalone: true,
  imports: [CommonModule, MainComponent, LoaderComponent, ErrorComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  appStarted = signal(true);
}
