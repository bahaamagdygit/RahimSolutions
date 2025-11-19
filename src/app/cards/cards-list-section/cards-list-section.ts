import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CategoryCard {
  id: number;
  title: string;
  image: string;
}

@Component({
  selector: 'app-cards-list-section',
  imports: [CommonModule],
  templateUrl: './cards-list-section.html',
  styleUrl: './cards-list-section.css',
})
export class CardsListSection {
  categories = signal<CategoryCard[]>([
    { id: 1, title: 'Auto', image: '/assts/imge/category/30.png' },
    { id: 2, title: 'Real estate', image: '/assts/imge/category/31.png' },
    { id: 3, title: 'Fashions', image: '/assts/imge/category/32.png' },
    { id: 4, title: 'For Home', image: '/assts/imge/category/33.png' },
    { id: 5, title: 'Services', image: '/assts/imge/category/34.png' },
    { id: 6, title: 'Hobbies', image: '/assts/imge/category/35.png' },
    { id: 7, title: 'Animals', image: '/assts/imge/category/36.png' },
    { id: 8, title: 'Electronics', image: '/assts/imge/category/37.png' },
    { id: 9, title: 'Children products', image: '/assts/imge/category/38.png' },
    { id: 10, title: 'Equipments', image: '/assts/imge/category/34.png' },
    { id: 11, title: 'Accommodation for Travel', image: '/assts/imge/category/33.png' },
    { id: 12, title: 'Beauty & Health', image: '/assts/imge/category/37.png' },
    { id: 13, title: 'Spare Parts', image: '/assts/imge/category/30.png' },
  ]);

  onCategoryClick(category: CategoryCard) {
    console.log('Category clicked:', category);
  }
}
