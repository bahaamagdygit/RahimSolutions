import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SellerCard, SellerData } from '../../../../Layout/shared/seller-card/seller-card';
import { StarRating } from '../../../../Layout/shared/star-rating/star-rating';
import { ReviewCard, ReviewData } from '../../../../Layout/shared/review-card/review-card';
import { MinGenaricCard } from '../../../../Layout/genaric-card/min-genaric-card/min-genaric-card';

interface ProductItem {
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
  selector: 'app-seller-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StarRating,
    ReviewCard,
    MinGenaricCard
  ],
  templateUrl: './seller-profile.html',
  styleUrl: './seller-profile.css'
})
export class SellerProfile implements OnInit {
  sellerId = signal<string | null>(null);

  // Seller data
  seller: SellerData = {
    id: 1,
    name: 'Xtreme Auto',
    logo: '/assts/imge/images.png',
    coverImage: '/assts/imge/cars/car-1.jpg',
    isVerified: true,
    followersCount: 120,
    adsCount: 230,
    rating: 4.0,
    reviewCount: 12,
    memberSince: '2008',
    description: 'Lorem ipsum dolor sit amet consectetur. Ante molestie ut leo rhoncus scelerisque quis morbi. Ornare nulla diam pretium amet tristique ac ratique non. Sit rec a turpis adipiscing nam vitae nibl id. Eu tempus suspendisse in sed non blandit. Vestibulum egestas.'
  };

  // Seller ads
  sellerAds: ProductItem[] = [
    {
      id: 1,
      title: 'Ford Mustang',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-1.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 2,
      title: 'Jeep Grand',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-2.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 3,
      title: 'BMW M4',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-3.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 4,
      title: 'Hundai Tucson',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-4.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 5,
      title: 'Mercedz-Benz C280',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-5.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 6,
      title: 'Rang Rover Evoke',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-6.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 7,
      title: 'Hundai Tucson',
      currentPrice: '$160.00',
      originalPrice: '$195.00',
      image: '/assts/imge/cars/car-7.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 8,
      title: 'Mercedes-Benz C280',
      currentPrice: '$160.00',
      originalPrice: '$195.00',
      image: '/assts/imge/cars/car-8.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 9,
      title: 'Rang Rover Evoke',
      currentPrice: '$160.00',
      originalPrice: '$195.00',
      image: '/assts/imge/cars/car-9.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    }
  ];

  // Similar ads
  similarAds: ProductItem[] = [
    {
      id: 1,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-1.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: true,
      discount: '30%'
    },
    {
      id: 2,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-2.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 3,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-3.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 4,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-4.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    },
    {
      id: 5,
      title: 'Iphone 17 Pro Max 1Tb',
      currentPrice: '$160.00',
      originalPrice: '$185.00',
      image: '/assts/imge/cars/car-5.jpg',
      badge: 'Auto',
      category: 'Xtreme Auto',
      isFavorite: false,
      discount: '30%'
    }
  ];

  // Reviews
  reviews: ReviewData[] = [
    {
      id: 1,
      userName: 'Ahmed Emad',
      userAvatar: '/assts/imge/USER/USER.png',
      date: '20 Des 2022, 08:00',
      rating: 5,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl dui, fringilla ac venenatis ut, varius at arcu. Duis non mollis nisl.'
    },
    {
      id: 2,
      userName: 'Sara Mohamed',
      userAvatar: '/assts/imge/USER/USER.png',
      date: '20 Des 2022, 08:00',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl dui, fringilla ac venenatis ut, varius at arcu. Duis non mollis nisl.'
    },
    {
      id: 3,
      userName: 'Ahmed Ashraf',
      userAvatar: '/assts/imge/USER/USER.png',
      date: '20 Des 2022, 08:00',
      rating: 5,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl dui, fringilla ac venenatis ut, varius at arcu. Duis non mollis nisl.'
    },
    {
      id: 4,
      userName: 'Salma mohamed',
      userAvatar: '/assts/imge/USER/USER.png',
      date: '20 Des 2022, 08:00',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl dui, fringilla ac venenatis ut, varius at arcu. Duis non mollis nisl.'
    }
  ];

  // Search
  searchQuery = signal('');

  // Slider state
  sliderIndex = signal(0);

  // Writing review state
  isWritingReview = signal(false);
  newRating = signal(0);
  newComment = signal('');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sellerId.set(params.get('id'));
    });
  }

  onFollow() {
    console.log('Following seller:', this.seller.name);
  }

  onChat() {
    console.log('Opening chat with:', this.seller.name);
  }

  onSearch() {
    console.log('Searching:', this.searchQuery());
  }

  onViewAllAds() {
    console.log('View all ads');
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

  // Review functions
  onWriteReview() {
    this.isWritingReview.set(true);
  }

  onCancelReview() {
    this.isWritingReview.set(false);
    this.newRating.set(0);
    this.newComment.set('');
  }

  onRatingChange(rating: number) {
    this.newRating.set(rating);
  }

  onSubmitReview() {
    if (this.newRating() > 0 && this.newComment().trim()) {
      const newReview: ReviewData = {
        id: this.reviews.length + 1,
        userName: 'Current User',
        userAvatar: '/assts/imge/USER/USER.png',
        date: new Date().toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        rating: this.newRating(),
        comment: this.newComment().trim()
      };
      this.reviews.unshift(newReview);
      this.onCancelReview();
    }
  }

  onViewMore() {
    console.log('View more similar ads');
  }

  onShareProfile() {
    console.log('Sharing profile:', this.seller.name);
  }

  scrollToReviews() {
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onFilter() {
    console.log('Opening filter options');
  }
}
