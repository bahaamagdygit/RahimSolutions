import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-min-genaric-card',
  imports: [CommonModule],
  templateUrl: './min-genaric-card.html',
  styleUrl: './min-genaric-card.css',
})
export class MinGenaricCard {
  // Badge customization
  badgeText = input<string>('For Home');
  badgeColor = input<string>('#ff9a56');
  badgeGradient = input<string>('linear-gradient(135deg, #ff9a56 0%, #ff7b3d 100%)');

  // Discount customization
  discountPercent = input<string>('30%');
  discountColor = input<string>('#ff4757');
  discountGradient = input<string>('linear-gradient(135deg, #ff4757 0%, #ff3838 100%)');

  // Category chip customization
  categoryText = input<string>('Home Furnitures');
  categoryBgColor = input<string>('rgba(0, 0, 0, 0.75)');
  categoryIconBg = input<string>('#ffffff');

  // Action buttons color
  actionButtonColor = input<string>('#ffffff');
  actionButtonHoverColor = input<string>('#f5f5f5');

  // Stats color
  statsColor = input<string>('#1e88e5');

  // Product details
  productTitle = input<string>('Generation Wallchiere Wall Lamp Without Bulb');
  currentPrice = input<string>('$160.00');
  originalPrice = input<string>('$185.00');
  productImage = input<string>('/assts/imge/icon-17-pro.jpg');

  // Card background
  cardBgColor = input<string>('#ffffff');

  // Price colors
  currentPriceColor = input<string>('#1a1a1a');
  originalPriceColor = input<string>('#999999');
}
