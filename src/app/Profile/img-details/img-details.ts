import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ImageGalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryConfig {
  images: ImageGalleryItem[];
  categories?: string[];
  showLikes?: boolean;
  showComments?: boolean;
  showViews?: boolean;
  likesCount?: number;
  commentsCount?: number;
  viewsCount?: number;
}

@Component({
  selector: 'app-img-details',
  imports: [CommonModule],
  templateUrl: './img-details.html',
  styleUrl: './img-details.css',
})
export class ImgDetails {
  config = input<GalleryConfig>({
    images: [{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },
  {
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/icon-17-pro.jpg',
      alt:'ww'
    },{
      id:1,
      src:'/assts/imge/images.png',
      alt:'ww'
    },
  ],
    categories: [],
    showLikes: true,
    showComments: true,
    showViews: true,
    likesCount: 0,
    commentsCount: 0,
    viewsCount: 0,
  });

  currentImageIndex = signal(0);
  maxVisibleThumbnails = 5;

  get currentImage() {
    const images = this.config().images;
    return images[this.currentImageIndex()] || null;
  }

  get visibleThumbnails() {
    const images = this.config().images;
    if (images.length <= this.maxVisibleThumbnails) {
      return images;
    }
    return images.slice(0, this.maxVisibleThumbnails);
  }

  get remainingImagesCount() {
    const images = this.config().images;
    return images.length > this.maxVisibleThumbnails
      ? images.length - this.maxVisibleThumbnails
      : 0;
  }

  selectImage(index: number) {
    this.currentImageIndex.set(index);
  }

  previousImage() {
    const images = this.config().images;
    if (this.currentImageIndex() > 0) {
      this.currentImageIndex.update((val) => val - 1);
    } else {
      this.currentImageIndex.set(images.length - 1);
    }
  }

  nextImage() {
    const images = this.config().images;
    if (this.currentImageIndex() < images.length - 1) {
      this.currentImageIndex.update((val) => val + 1);
    } else {
      this.currentImageIndex.set(0);
    }
  }

  onLike() {
    console.log('Like clicked');
  }

  onFavorite() {
    console.log('Favorite clicked');
  }

  onShare() {
    console.log('Share clicked');
  }
}
