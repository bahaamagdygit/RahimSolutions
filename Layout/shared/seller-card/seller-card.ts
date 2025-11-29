import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StarRating } from '../star-rating/star-rating';

export interface SellerData {
  id: number;
  name: string;
  logo: string;
  coverImage?: string;
  isVerified: boolean;
  followersCount: number;
  adsCount?: number;
  rating: number;
  reviewCount: number;
  memberSince: string;
  description?: string;
}

@Component({
  selector: 'app-seller-card',
  standalone: true,
  imports: [CommonModule, RouterLink, StarRating],
  templateUrl: './seller-card.html',
  styleUrl: './seller-card.css'
})
export class SellerCard {
  seller = input.required<SellerData>();
  showCover = input<boolean>(false);
  showActions = input<boolean>(true);
  compact = input<boolean>(false);
  linkToProfile = input<boolean>(true);

  followClick = output<void>();
  chatClick = output<void>();

  onFollow() {
    this.followClick.emit();
  }

  onChat() {
    this.chatClick.emit();
  }
}
