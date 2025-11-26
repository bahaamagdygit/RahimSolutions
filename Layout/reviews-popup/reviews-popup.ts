import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  comment: string;
}

export interface ReviewsData {
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
}

@Component({
  selector: 'app-reviews-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews-popup.html',
  styleUrl: './reviews-popup.css'
})
export class ReviewsPopup {
  Math = Math;
  @Input() isOpen = false;
  @Input() reviewsData: ReviewsData = {
    averageRating: 4.0,
    totalReviews: 12,
    reviews: []
  };
  @Output() closePopup = new EventEmitter<void>();
  @Output() submitReview = new EventEmitter<{ rating: number; comment: string }>();

  showWriteReview = signal(false);
  newRating = signal(0);
  hoverRating = signal(0);
  newComment = signal('');

  close() {
    this.closePopup.emit();
    this.resetForm();
  }

  openWriteReview() {
    this.showWriteReview.set(true);
  }

  cancelWriteReview() {
    this.showWriteReview.set(false);
    this.resetForm();
  }

  resetForm() {
    this.newRating.set(0);
    this.hoverRating.set(0);
    this.newComment.set('');
    this.showWriteReview.set(false);
  }

  setRating(rating: number) {
    this.newRating.set(rating);
  }

  setHoverRating(rating: number) {
    this.hoverRating.set(rating);
  }

  clearHoverRating() {
    this.hoverRating.set(0);
  }

  submitNewReview() {
    if (this.newRating() > 0 && this.newComment().trim()) {
      this.submitReview.emit({
        rating: this.newRating(),
        comment: this.newComment().trim()
      });
      this.resetForm();
    }
  }

  getStarArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  isStarFilled(star: number, rating: number): boolean {
    return star <= rating;
  }

  isStarHovered(star: number): boolean {
    return this.hoverRating() > 0 && star <= this.hoverRating();
  }

  getDisplayRating(): number {
    return this.hoverRating() > 0 ? this.hoverRating() : this.newRating();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
      this.close();
    }
  }
}
