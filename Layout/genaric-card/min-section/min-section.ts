import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinGenaricCard } from '../min-genaric-card/min-genaric-card';

interface Product {
  badgeText: string;
  badgeGradient: string;
  discountPercent: string;
  discountGradient: string;
  categoryText: string;
  categoryBgColor: string;
  statsColor: string;
  currentPriceColor: string;
  productTitle: string;
  currentPrice: string;
  originalPrice: string;
  productImage: string;
}

@Component({
  selector: 'app-min-section',
  imports: [CommonModule, MinGenaricCard],
  templateUrl: './min-section.html',
  styleUrl: './min-section.css',
})
export class MinSection {
  currentPage = signal(0);
  itemsPerPage = 4;

  // All products data
  allProducts: Product[] = [
    {
      badgeText: 'Hot',
      badgeGradient: 'linear-gradient(135deg, #ff9a56 0%, #ff7b3d 100%)',
      discountPercent: '30%',
      discountGradient: 'linear-gradient(135deg, #ff4757 0%, #ff3838 100%)',
      categoryText: 'Omega Auto',
      categoryBgColor: 'rgba(0, 0, 0, 0.75)',
      statsColor: '#1e88e5',
      currentPriceColor: '#1a1a1a',
      productTitle: 'MG Model 2025 - Trinity',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Featured',
      badgeGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      discountPercent: '50%',
      discountGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      categoryText: 'Loren Garcia',
      categoryBgColor: 'rgba(102, 126, 234, 0.9)',
      statsColor: '#667eea',
      currentPriceColor: '#667eea',
      productTitle: 'Palm Chanel Booked Seri Villanov',
      currentPrice: '$90.00',
      originalPrice: '$150.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Premium',
      badgeGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      discountPercent: '25%',
      discountGradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
      categoryText: 'Mark Ruffalo',
      categoryBgColor: 'rgba(17, 153, 142, 0.9)',
      statsColor: '#11998e',
      currentPriceColor: '#11998e',
      productTitle: 'Apple Watch Series 5',
      currentPrice: '$160.00',
      originalPrice: '$199.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Trending',
      badgeGradient: 'linear-gradient(135deg, #a770ef 0%, #cf8bf3 100%)',
      discountPercent: '15%',
      discountGradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      categoryText: 'All Vison',
      categoryBgColor: 'rgba(167, 112, 239, 0.9)',
      statsColor: '#a770ef',
      currentPriceColor: '#a770ef',
      productTitle: 'Casual Cloths Blazers Bold',
      currentPrice: '$160.00',
      originalPrice: '$200.00',
      productImage: '/assts/imge/1.jpg'
    },
    {
      badgeText: 'New',
      badgeGradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
      discountPercent: '40%',
      discountGradient: 'linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)',
      categoryText: 'Electronics',
      categoryBgColor: 'rgba(235, 51, 73, 0.9)',
      statsColor: '#eb3349',
      currentPriceColor: '#eb3349',
      productTitle: 'UNOA Casual Shoes Girls Sneakers',
      currentPrice: '$85.00',
      originalPrice: '$120.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Sale',
      badgeGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      discountPercent: '60%',
      discountGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      categoryText: 'Fashion',
      categoryBgColor: 'rgba(240, 147, 251, 0.9)',
      statsColor: '#f093fb',
      currentPriceColor: '#f093fb',
      productTitle: 'Modern Laptop Stand Aluminum',
      currentPrice: '$45.00',
      originalPrice: '$99.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Limited',
      badgeGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      discountPercent: '35%',
      discountGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      categoryText: 'Home Decor',
      categoryBgColor: 'rgba(79, 172, 254, 0.9)',
      statsColor: '#4facfe',
      currentPriceColor: '#4facfe',
      productTitle: 'Wireless Bluetooth Headphones Pro',
      currentPrice: '$120.00',
      originalPrice: '$180.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Exclusive',
      badgeGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      discountPercent: '45%',
      discountGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      categoryText: 'Gadgets',
      categoryBgColor: 'rgba(250, 112, 154, 0.9)',
      statsColor: '#fa709a',
      currentPriceColor: '#fa709a',
      productTitle: 'Smart Home Assistant Speaker',
      currentPrice: '$75.00',
      originalPrice: '$130.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Exclusive',
      badgeGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      discountPercent: '45%',
      discountGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      categoryText: 'Gadgets',
      categoryBgColor: 'rgba(250, 112, 154, 0.9)',
      statsColor: '#fa709a',
      currentPriceColor: '#fa709a',
      productTitle: 'Smart Home Assistant Speaker',
      currentPrice: '$75.00',
      originalPrice: '$130.00',
      productImage: '/assts/imge/icon-17-pro.jpgimages.png'
    },
    {
      badgeText: 'Exclusive',
      badgeGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      discountPercent: '45%',
      discountGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      categoryText: 'Gadgets',
      categoryBgColor: 'rgba(250, 112, 154, 0.9)',
      statsColor: '#fa709a',
      currentPriceColor: '#fa709a',
      productTitle: 'Smart Home Assistant Speaker',
      currentPrice: '$75.00',
      originalPrice: '$130.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Exclusive',
      badgeGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      discountPercent: '45%',
      discountGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      categoryText: 'Gadgets',
      categoryBgColor: 'rgba(250, 112, 154, 0.9)',
      statsColor: '#fa709a',
      currentPriceColor: '#fa709a',
      productTitle: 'Smart Home Assistant Speaker',
      currentPrice: '$75.00',
      originalPrice: '$130.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Exclusive',
      badgeGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      discountPercent: '45%',
      discountGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      categoryText: 'Gadgets',
      categoryBgColor: 'rgba(250, 112, 154, 0.9)',
      statsColor: '#fa709a',
      currentPriceColor: '#fa709a',
      productTitle: 'Smart Home Assistant Speaker',
      currentPrice: '$75.00',
      originalPrice: '$130.00',
      productImage: '/assts/imge/icon-17-pro.jpg'
    },
    {
      badgeText: 'Exclusive',
      badgeGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      discountPercent: '45%',
      discountGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      categoryText: 'Gadgets',
      categoryBgColor: 'rgba(250, 112, 154, 0.9)',
      statsColor: '#fa709a',
      currentPriceColor: '#fa709a',
      productTitle: 'Smart Home Assistant Speaker',
      currentPrice: '$75.00',
      originalPrice: '$130.00',
      productImage: '/assts/imge/images.png'
    },
    {
      badgeText: 'Exclusive',
      badgeGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      discountPercent: '45%',
      discountGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      categoryText: 'Gadgets',
      categoryBgColor: 'rgba(250, 112, 154, 0.9)',
      statsColor: '#fa709a',
      currentPriceColor: '#fa709a',
      productTitle: 'Smart Home Assistant Speaker',
      currentPrice: '$75.00',
      originalPrice: '$130.00',
      productImage: '/assts/imge/images.png'
    }
  ];

  // Get current page products
  getCurrentPageProducts() {
    const start = this.currentPage() * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.allProducts.slice(start, end);
  }

  // Get total pages
  getTotalPages() {
    return Math.ceil(this.allProducts.length / this.itemsPerPage);
  }

  // Navigate to specific page
  goToPage(page: number) {
    if (page >= 0 && page < this.getTotalPages()) {
      this.currentPage.set(page);
    }
  }

  // Next page
  nextPage() {
    if (this.currentPage() < this.getTotalPages() - 1) {
      this.currentPage.update(page => page + 1);
    }
  }

  // Previous page
  previousPage() {
    if (this.currentPage() > 0) {
      this.currentPage.update(page => page - 1);
    }
  }

  // Get page numbers for pagination
  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i);
  }
}
