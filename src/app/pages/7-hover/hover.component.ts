import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';
import { DogComponent } from '../../components/dog/dog.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';


@Component({
  selector: 'dc-hover',
  standalone: true,
  imports: [CommonModule, CatComponent, DogComponent, PlaceholderComponent],
  templateUrl: './hover.component.html'
})
export class HoverComponent {

}
