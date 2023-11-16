import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ErrorComponent } from '../../components/error/error.component';
import { CatComponent } from '../../components/cat/cat.component';

@Component({
  selector: 'dc-tests',
  standalone: true,
  imports: [CommonModule, CatComponent, ErrorComponent, LoaderComponent, PlaceholderComponent],
  templateUrl: './tests.component.html'
})
export class TestsComponent {

}
