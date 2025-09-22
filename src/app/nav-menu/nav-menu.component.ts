import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isActive = false;

  @ViewChild('toggleButton') toggleButton!: ElementRef<HTMLButtonElement>;

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  closeMenu() {
    if (this.isActive) {
      this.isActive = false;
      this.toggleButton?.nativeElement.focus();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.closeMenu();
    }
  }
}
