import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-vs-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vs-code.component.html',
  styleUrls: ['./vs-code.component.css']
})
export class VsCodeComponent {
  private viewportScroller = inject(ViewportScroller);

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
