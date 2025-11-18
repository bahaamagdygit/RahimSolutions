import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
 
  image: string;
  name:string;
}

@Component({
  selector: 'app-testimonial-slider',
  imports: [CommonModule],
  templateUrl: './testimonial-slider.html',
  styleUrl: './testimonial-slider.css',
})
export class TestimonialSlider {
  currentSlide = signal(0);
  autoPlay = input<boolean>(true);
  autoPlayInterval = input<number>(5000);

  testimonials = input<Testimonial[]>([
    {
          name: 'Lisa Anderson',

      image: '/assts/imge/slider/s1.png',
    },
    {      name: 'Lisa Anderson',

      image: '/assts/imge/slider/s2.png',
      },
    {
           name: 'Lisa Anderson',

      image: '/assts/imge/slider/s3.png',
        },
    {
          name: 'Lisa Anderson',

      image: '/assts/imge/slider/s4.png',
    },
    {
          name: 'Lisa Anderson',

      image: '/assts/imge/slider/s5.png',
    },
    {
       name: 'Lisa Anderson',

      image: '/assts/imge/slider/s5.png',
    },
    {
      name: 'Lisa Anderson',
      image: '/assts/imge/slider/s5.png',
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
    const totalSlides = this.testimonials().length;
    if (this.currentSlide() < totalSlides - 1) {
      this.currentSlide.update(slide => slide + 1);
    } else {
      this.currentSlide.set(0);
    }
  }

  previousSlide() {
    const totalSlides = this.testimonials().length;
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

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i);
  }

  getSlideTransform(index: number): string {
    const current = this.currentSlide();
    const total = this.testimonials().length;

    if (total === 0) return '';

    let position = index - current;

    // Wrap around for continuous loop
    if (position > total / 2) {
      position -= total;
    } else if (position < -total / 2) {
      position += total;
    }

    // Active slide (center)
    if (position === 0) {
      return 'translateX(0) translateZ(0) translateY(0) scale(1)';
    }

    // Calculate transform based on position
    const absPosition = Math.abs(position);
    const direction = position > 0 ? 1 : -1;

    const translateX = direction * 280 * absPosition;
    const translateZ = -120 * absPosition;
    const translateY = -20 * absPosition;
    const scale = Math.max(0.7, 1 - (0.1 * absPosition));

    return `translateX(${translateX}px) translateZ(${translateZ}px) translateY(${translateY}px) scale(${scale})`;
  }

  getSlideOpacity(index: number): number {
    const current = this.currentSlide();
    const total = this.testimonials().length;

    if (total === 0) return 0;

    let position = index - current;

    // Wrap around for continuous loop
    if (position > total / 2) {
      position -= total;
    } else if (position < -total / 2) {
      position += total;
    }

    // Active slide
    if (position === 0) return 1;

    // Calculate opacity based on distance
    const absPosition = Math.abs(position);
    return Math.max(0.3, 1 - (0.3 * absPosition));
  }

  getSlideZIndex(index: number): number {
    const current = this.currentSlide();
    const total = this.testimonials().length;

    if (total === 0) return 0;

    let position = index - current;

    // Wrap around for continuous loop
    if (position > total / 2) {
      position -= total;
    } else if (position < -total / 2) {
      position += total;
    }

    // Z-index decreases with distance from center
    return 10 - Math.abs(position);
  }
}
