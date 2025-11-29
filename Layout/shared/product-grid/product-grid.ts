import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MinGenaricCard } from '../../genaric-card/min-genaric-card/min-genaric-card';

export interface ProductItem {
  id: number;
  title: string;
  currentPrice: string;
  originalPrice: string;
  image: string;
  badge: string;
  category: string;
  isFavorite: boolean;
  discount?: string;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, FormsModule, MinGenaricCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {
  title = input<string>('Products');
  products = input<ProductItem[]>([]);
  totalCount = input<number>(0);
  showSearch = input<boolean>(true);
  showViewAll = input<boolean>(true);
  columns = input<number>(3);

  searchQuery = signal('');

  viewAllClick = output<void>();
  productClick = output<ProductItem>();

  onSearch() {
    // Implement search functionality
  }

  onViewAll() {
    this.viewAllClick.emit();
  }

  onProductClick(product: ProductItem) {
    this.productClick.emit(product);
  }
}
