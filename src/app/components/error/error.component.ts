import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dc-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styles: `:host{
    width: 100%;
    height: 100%
  }`
})
export class ErrorComponent {

}
