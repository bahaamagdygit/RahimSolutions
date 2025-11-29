import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="star-rating" [class.interactive]="interactive()">
      @for (star of getStars(); track star) {
        <svg
          [class.filled]="star <= rating()"
          [class.hovered]="interactive() && star <= hoveredRating"
          (click)="interactive() && onStarClick(star)"
          (mouseenter)="interactive() && onStarHover(star)"
          (mouseleave)="interactive() && onStarLeave()"
          [attr.width]="size()"
          [attr.height]="size()"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      }
      @if (showCount() && reviewCount() !== undefined) {
        <span class="review-count">{{ reviewCount() }} Reviews</span>
      }
    </div>
  `,
  styles: [`
    .star-rating {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    .star-rating.interactive svg {
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .star-rating svg {
      color: #e0e0e0;
      fill: #e0e0e0;
      transition: all 0.2s ease;
    }

    .star-rating svg.filled {
      color: #ffc107;
      fill: #ffc107;
    }

    .star-rating svg.hovered {
      color: #ffca28;
      fill: #ffca28;
      transform: scale(1.1);
    }

    .review-count {
      margin-left: 0.5rem;
      font-size: 0.875rem;
      color: #6b7280;
    }
  `]
})
export class StarRating {
  rating = input<number>(0);
  size = input<number>(18);
  interactive = input<boolean>(false);
  showCount = input<boolean>(false);
  reviewCount = input<number | undefined>(undefined);

  ratingChange = output<number>();

  hoveredRating = 0;

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  onStarClick(star: number) {
    this.ratingChange.emit(star);
  }

  onStarHover(star: number) {
    this.hoveredRating = star;
  }

  onStarLeave() {
    this.hoveredRating = 0;
  }
}
