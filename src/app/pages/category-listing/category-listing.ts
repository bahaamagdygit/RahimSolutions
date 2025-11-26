import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericFilter, FilterSection, FilterChangeEvent, autoFilterSections } from '../../../../Layout/filters/generic-filter/generic-filter';
import { MinGenaricCard } from '../../../../Layout/genaric-card/min-genaric-card/min-genaric-card';

interface Product {
  id: number;
  title: string;
  currentPrice: string;
  originalPrice: string;
  image: string;
  badge: string;
  badgeColor: string;
  category: string;
  categoryIcon: string;
  likes: number;
  shares: number;
  favorites: number;
  isFavorite: boolean;
}

@Component({
  selector: 'app-category-listing',
  standalone: true,
  imports: [CommonModule, FormsModule, GenericFilter, MinGenaricCard],
  templateUrl: './category-listing.html',
  styleUrl: './category-listing.css',
})
export class CategoryListing {
  // Filter sections from demo data
  filterSections: FilterSection[] = autoFilterSections;

  // Sorting
  sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
  ];
  selectedSort = signal('featured');
  showSortDropdown = signal(false);

  // Pagination
  currentPage = signal(1);
  totalPages = 6;
  totalProducts = 200;
  productsPerPage = 15;

  // Products data
  products: Product[] = [
    {
      id: 1,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-1.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: true
    },
    {
      id: 2,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-2.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-3.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 4,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-4.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-5.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: true
    },
    {
      id: 6,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-6.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 7,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-7.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 8,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-8.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: true
    },
    {
      id: 9,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-9.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 10,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-10.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: true
    },
    {
      id: 11,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-11.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: true
    },
    {
      id: 12,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-12.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 13,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-1.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 14,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-2.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    },
    {
      id: 15,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-3.jpg',
      badge: 'Auto',
      badgeColor: '#3b5998',
      category: 'Xtreme Auto',
      categoryIcon: 'car',
      likes: 32,
      shares: 12,
      favorites: 32,
      isFavorite: false
    }
  ];

  // Handle filter changes
  onFilterChange(event: FilterChangeEvent) {
    console.log('Filter changed:', event);
    // Apply filter logic here
  }

  // Handle back click from filter
  onFilterBack() {
    console.log('Back clicked');
  }

  // Toggle sort dropdown
  toggleSortDropdown() {
    this.showSortDropdown.update(v => !v);
  }

  // Select sort option
  selectSort(sortId: string) {
    this.selectedSort.set(sortId);
    this.showSortDropdown.set(false);
  }

  // Get sort label
  getSortLabel(): string {
    return this.sortOptions.find(o => o.id === this.selectedSort())?.label || 'Featured';
  }

  // Pagination methods
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }

  previousPage() {
    this.goToPage(this.currentPage() - 1);
  }

  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Get showing range
  getShowingStart(): number {
    return (this.currentPage() - 1) * this.productsPerPage + 1;
  }

  getShowingEnd(): number {
    return Math.min(this.currentPage() * this.productsPerPage, this.totalProducts);
  }
}
