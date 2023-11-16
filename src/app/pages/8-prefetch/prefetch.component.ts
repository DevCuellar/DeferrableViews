import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';


@Component({
  selector: 'dc-prefetch',
  standalone: true,
  imports: [CommonModule, CatComponent, PlaceholderComponent],
  templateUrl: './prefetch.component.html'
})
export class PrefetchComponent {
  prefetch = signal(false);
  show = signal(false);
}
