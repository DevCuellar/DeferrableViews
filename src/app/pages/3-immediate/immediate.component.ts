import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../../components/cat/cat.component';


@Component({
  selector: 'dc-immediate',
  standalone: true,
  imports: [CommonModule, CatComponent],
  templateUrl: './immediate.component.html'
})
export class ImmediateComponent {

}
