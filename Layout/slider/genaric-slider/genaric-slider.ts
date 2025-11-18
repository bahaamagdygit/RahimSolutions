import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SlideData {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundGradient: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

@Component({
  selector: 'app-genaric-slider',
  imports: [CommonModule],
  templateUrl: './genaric-slider.html',
  styleUrl: './genaric-slider.css',
})
export class GenaricSlider {
  currentSlide = signal(0);
  autoPlay = input<boolean>(true);
  autoPlayInterval = input<number>(5000);
  slidesToShow = input<number>(3);

  slides = input<SlideData[]>([
    {
      title: '7000€',
      subtitle: 'COUPON VOUCHER',
      description: 'Special discount for new customers',
      backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: '/assts/imge/icon-17-pro.jpg',
      buttonText: 'Get Coupon',
      buttonLink: '#'
    },
    {
      title: '5000€',
      subtitle: 'SPECIAL OFFER',
      description: 'Limited time promotion',
      backgroundGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      image: '/assts/imge/images.png',
      buttonText: 'Claim Now',
      buttonLink: '#'
    },
    {
      title: '3000€',
      subtitle: 'BONUS DEAL',
      description: 'Exclusive for members',
      backgroundGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      image: '/assts/imge/1.jpg',
      buttonText: 'Redeem',
      buttonLink: '#'
    },
    {
      title: '2000€',
      subtitle: 'FLASH SALE',
      description: 'Today only special',
      backgroundGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      image: '/assts/imge/icon-17-pro.jpg',
      buttonText: 'Shop Now',
      buttonLink: '#'
    },
    {
      title: '1500€',
      subtitle: 'WELCOME GIFT',
      description: 'For first purchase',
      backgroundGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      image: '/assts/imge/images.png',
      buttonText: 'Use Now',
      buttonLink: '#'
    }
  ]);

  private autoPlayTimer: any;

  ngOnInit() {
    if (this.autoPlay()) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval());
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  nextSlide() {
    const totalSlides = this.slides().length;
    if (this.currentSlide() < totalSlides - 1) {
      this.currentSlide.update(slide => slide + 1);
    } else {
      this.currentSlide.set(0);
    }
  }

  previousSlide() {
    const totalSlides = this.slides().length;
    if (this.currentSlide() > 0) {
      this.currentSlide.update(slide => slide - 1);
    } else {
      this.currentSlide.set(totalSlides - 1);
    }
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    if (this.autoPlay()) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  getSlideNumbers(): number[] {
    return Array.from({ length: this.slides().length }, (_, i) => i);
  }

  getTransformStyle(): string {
    const slideWidth = 100 / this.slidesToShow();
    return `translateX(-${this.currentSlide() * slideWidth}%)`;
  }
}
