import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./promo-banner.component.css'],
})
export class PromoBannerComponent implements OnDestroy {
  currentIndex = 0;
  isPaused = false;

  // IDs for ARIA descriptions
  promoIds = ['promo-msg-0', 'promo-msg-1', 'promo-msg-2'];

  // Interval reference for auto-rotation
  private rotationInterval!: any;

  // Return the current aria-describedby ID
  get currentAriaId(): string {
    return this.promoIds[this.currentIndex];
  }

  constructor() {
    // Auto-rotate messages every 5 seconds
    this.rotationInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextMessage();
      }
    }, 5000);
  }

  nextMessage() {
    this.currentIndex = (this.currentIndex + 1) % this.promoIds.length;
  }

  toggleAnimation() {
    this.isPaused = !this.isPaused;
  }

  // Optional: get current promo message programmatically
  getCurrentPromo() {
    const messages = [
      {
        text: 'Need cost-effective software consulting?',
        link: 'https://accissi.com',
      },
      {
        text: 'Streamline your projects with expert Software Development, Testing & Automation.',
        link: 'https://accissi.com',
      },
      {
        text: 'Upgrade your skills with top-quality software training at unbeatable prices.',
        link: 'https://accissi.com',
      },
    ];
    return messages[this.currentIndex];
  }

  ngOnDestroy() {
    clearInterval(this.rotationInterval);
  }
}
