import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRating } from '../star-rating/star-rating';

export interface ReviewData {
  id: number;
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, StarRating],
  templateUrl: './review-card.html',
  styleUrl: './review-card.css'
})
export class ReviewCard {
  review = input.required<ReviewData>();
  compact = input<boolean>(false);
}
