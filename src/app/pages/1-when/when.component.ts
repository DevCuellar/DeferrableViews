import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { CatComponent } from '../../components/cat/cat.component';

@Component({
  selector: 'dc-when',
  standalone: true,
  imports: [CommonModule, PlaceholderComponent, CatComponent],
  templateUrl: './when.component.html',
})
export class WhenComponent {
  comida = signal(0);
}
