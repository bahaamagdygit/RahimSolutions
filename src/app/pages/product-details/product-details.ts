import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImgDetails, GalleryConfig } from '../../Profile/img-details/img-details';
import { MinGenaricCard } from '../../../../Layout/genaric-card/min-genaric-card/min-genaric-card';
import { ReviewsPopup, ReviewsData } from '../../../../Layout/reviews-popup/reviews-popup';

interface Breadcrumb {
  label: string;
  link?: string;
}

interface Seller {
  name: string;
  logo: string;
  memberSince: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  responseTime: string;
}

interface Specification {
  label: string;
  value: string;
}

interface Product {
  id: number;
  title: string;
  price: string;
  details: string;
  listedDate: string;
  description: string[];
  specifications: Specification[];
}

interface SimilarProduct {
  id: number;
  title: string;
  currentPrice: string;
  originalPrice: string;
  image: string;
  badge: string;
  category: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, ImgDetails, MinGenaricCard, ReviewsPopup],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  // Breadcrumbs
  breadcrumbs: Breadcrumb[] = [
    { label: 'Home', link: '/' },
    { label: 'Auto', link: '/category' },
    { label: 'Sedan', link: '/category/sedan' },
    { label: 'Used', link: '/category/sedan/used' },
    { label: 'BMW', link: '/category/sedan/used/bmw' },
    { label: 'M4' }
  ];

  // Gallery config
  galleryConfig: GalleryConfig = {
    images: [
      { id: 1, src: '/assts/imge/cars/car-1.jpg', alt: 'BMW M4 Front View' },
      { id: 2, src: '/assts/imge/cars/car-2.jpg', alt: 'BMW M4 Side View' },
      { id: 3, src: '/assts/imge/cars/car-3.jpg', alt: 'BMW M4 Rear View' },
      { id: 4, src: '/assts/imge/cars/car-4.jpg', alt: 'BMW M4 Interior' },
      { id: 5, src: '/assts/imge/cars/car-5.jpg', alt: 'BMW M4 Engine' },
      { id: 6, src: '/assts/imge/cars/car-6.jpg', alt: 'BMW M4 Dashboard' },
      { id: 7, src: '/assts/imge/cars/car-7.jpg', alt: 'BMW M4 Seats' },
      { id: 8, src: '/assts/imge/cars/car-8.jpg', alt: 'BMW M4 Wheels' },
      { id: 9, src: '/assts/imge/cars/car-9.jpg', alt: 'BMW M4 Night' },
      { id: 10, src: '/assts/imge/cars/car-10.jpg', alt: 'BMW M4 Detail' },
      { id: 11, src: '/assts/imge/cars/car-11.jpg', alt: 'BMW M4 Detail 2' },
      { id: 12, src: '/assts/imge/cars/car-12.jpg', alt: 'BMW M4 Detail 3' },
    ],
    categories: ['Auto', 'Featured'],
    showLikes: true,
    showComments: true,
    showViews: true,
    likesCount: 32,
    commentsCount: 12,
    viewsCount: 32
  };

  // Product info
  product: Product = {
    id: 1,
    title: 'BMW M4',
    price: '$5,499,000',
    details: 'BMW M4 3.0 AMT, 2017, 61,000 Km',
    listedDate: 'Listed 4 Days Ago',
    description: [
      'Got a great discount!',
      'Re-wrapped it in an expensive, bright film (the original color is graphite).',
      'New 666 style wheels. Single owner.',
      'Trade-in for an SUV: GLS or Cayenne Coupe from 2020.'
    ],
    specifications: [
      { label: 'Year of release', value: '2017' },
      { label: 'Generation', value: 'F82/F83 facelift (2017-2020)' },
      { label: 'Mileage', value: '61,000 km' },
      { label: 'Mileage history', value: '2 entries in the Autoteka report' },
      { label: 'PTS', value: 'Original' },
      { label: 'Owners according to PTS', value: '1' },
      { label: 'Condition', value: 'Not damaged' },
      { label: 'Modification', value: '3.0 AMT (450 hp)' },
      { label: 'Engine capacity', value: '3 l' },
      { label: 'Engine type', value: 'Gasoline' },
      { label: 'Gearbox', value: 'Robot' },
      { label: 'Drive', value: 'Rear' },
      { label: 'Equipment', value: 'Base' },
      { label: 'Body type', value: 'Convertible' },
      { label: 'Color', value: 'Gray' },
      { label: 'Steering wheel', value: 'Left' },
      { label: 'VIN or chassis number', value: 'WBS4**************' },
      { label: 'Exchange', value: 'Not interested' }
    ]
  };

  // Seller info
  seller: Seller = {
    name: 'Xtreme Auto',
    logo: '/assts/imge/images.png',
    memberSince: 'Member since 2012',
    isVerified: true,
    rating: 4.0,
    reviewCount: 12,
    responseTime: 'responds within a few hours'
  };

  // Seller's other ads
  sellerAds: SimilarProduct[] = [
    {
      id: 1,
      title: 'BMW F92 2025 - 4500 cc turbo',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-3.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Honda Accord 2025',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-5.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false
    }
  ];

  // Similar ads
  similarAds: SimilarProduct[] = [
    {
      id: 1,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-1.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: true
    },
    {
      id: 2,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-2.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-4.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-6.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-7.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false
    }
  ];

  // Phone visibility
  showPhone = signal(false);
  phoneNumber = '9666-XXX-XXX-XXXX';

  // Slider state
  sliderIndex = signal(0);

  // Reviews popup state
  showReviewsPopup = signal(false);
  reviewsData: ReviewsData = {
    averageRating: 4.0,
    totalReviews: 12,
    reviews: [
      {
        id: 1,
        userName: 'Sin Tae',
        userAvatar: '/assts/imge/USER/USER.png',
        date: '20 Des 2022, 08:00',
        rating: 5,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl dui, fringilla ac venenatis ut, varius at arcu. Duis non mollis nisl.'
      },
      {
        id: 2,
        userName: 'Peg Legge',
        userAvatar: '/assts/imge/USER/USER.png',
        date: '20 Des 2022, 08:00',
        rating: 2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl dui, fringilla ac venenatis ut, varius at arcu. Duis non mollis nisl.'
      },
      {
        id: 3,
        userName: 'Jack Thompson',
        userAvatar: '/assts/imge/USER/USER.png',
        date: '20 Des 2022, 08:00',
        rating: 2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl dui, fringilla ac venenatis ut, varius at arcu. Duis non mollis nisl.'
      }
    ]
  };

  togglePhone() {
    this.showPhone.update(v => !v);
  }

  followSeller() {
    console.log('Following seller:', this.seller.name);
  }

  chatWithSeller() {
    console.log('Opening chat with:', this.seller.name);
  }

  openReviewsPopup() {
    this.showReviewsPopup.set(true);
  }

  closeReviewsPopup() {
    this.showReviewsPopup.set(false);
  }

  onSubmitReview(review: { rating: number; comment: string }) {
    const newReview = {
      id: this.reviewsData.reviews.length + 1,
      userName: 'Current User',
      userAvatar: '/assts/imge/USER/USER.png',
      date: new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      rating: review.rating,
      comment: review.comment
    };
    this.reviewsData.reviews.unshift(newReview);
    this.reviewsData.totalReviews++;
    const totalRating = this.reviewsData.reviews.reduce((sum, r) => sum + r.rating, 0);
    this.reviewsData.averageRating = Math.round((totalRating / this.reviewsData.reviews.length) * 10) / 10;
  }

  // Slider navigation
  slideLeft() {
    if (this.sliderIndex() > 0) {
      this.sliderIndex.update(v => v - 1);
    }
  }

  slideRight() {
    const maxIndex = Math.max(0, this.similarAds.length - 4);
    if (this.sliderIndex() < maxIndex) {
      this.sliderIndex.update(v => v + 1);
    }
  }

  getSliderTransform(): string {
    return `translateX(-${this.sliderIndex() * 280}px)`;
  }

  // Generate star rating array
  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}
