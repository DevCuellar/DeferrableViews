import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dc-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styles: `li:hover{
    cursor:pointer;
    background-color: #3585fd;
    color: #ffffff;
  }`,
})
export class MenuComponent {
  page = signal('');
  @Output() onPage: EventEmitter<string> = new EventEmitter<string>();

  setPage(page: string){
    this.page.set(page);
    this.onPage.emit(page);
  }
}
