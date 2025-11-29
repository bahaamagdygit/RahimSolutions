import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarRating } from '../star-rating/star-rating';
import { ReviewCard, ReviewData } from '../review-card/review-card';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  imports: [CommonModule, FormsModule, StarRating, ReviewCard],
  templateUrl: './reviews-section.html',
  styleUrl: './reviews-section.css'
})
export class ReviewsSection {
  title = input<string>('Reviews');
  averageRating = input<number>(0);
  totalReviews = input<number>(0);
  reviews = input<ReviewData[]>([]);
  showWriteReview = input<boolean>(true);
  maxDisplayed = input<number>(4);

  writeReviewClick = output<void>();
  submitReview = output<{ rating: number; comment: string }>();

  isWriting = signal(false);
  newRating = signal(0);
  newComment = signal('');

  onWriteReview() {
    this.isWriting.set(true);
  }

  onCancelReview() {
    this.isWriting.set(false);
    this.newRating.set(0);
    this.newComment.set('');
  }

  onSubmitReview() {
    if (this.newRating() > 0 && this.newComment().trim()) {
      this.submitReview.emit({
        rating: this.newRating(),
        comment: this.newComment().trim()
      });
      this.onCancelReview();
    }
  }

  onRatingChange(rating: number) {
    this.newRating.set(rating);
  }

  getDisplayedReviews(): ReviewData[] {
    return this.reviews().slice(0, this.maxDisplayed());
  }
}
