import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface Category {
  name: string;
  icon: string;
  link: string;
  subcategories?: SubCategory[];
}

interface SubCategory {
  name: string;
  link: string;
  items?: string[];
}

interface User {
  name: string;
  avatar: string;
  isVerified: boolean;
}

@Component({
  selector: 'app-nave-bar',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './nave-bar.html',
  styleUrl: './nave-bar.css',
})
export class NaveBar {
  searchQuery = signal('');
  selectedLocation = signal('All Locations');
  showLocationDropdown = signal(false);
  showAllCategoriesMenu = signal(false);
  showProfileDropdown = signal(false);
  showMobileMenu = signal(false);
  showLanguageDropdown = signal(false);
  activeCategory = signal<string | null>(null);

  // Language state
  selectedLanguage = signal({ code: 'ar', name: 'اللغه العربية', shortName: 'AR', flag: 'sa' });
  languages = [
    { code: 'ar', name: 'اللغه العربية', shortName: 'AR', flag: 'sa' },
    { code: 'en', name: 'English', shortName: 'EN', flag: 'us' },
  ];

  // User authentication state
  isLoggedIn = signal(true);
  currentUser = signal<User | null>({
    name: 'Mustafa',
    avatar: '/assts/imge/USER/USER.png',
    isVerified: false
  });

  // Demo: Toggle login state (for testing)
  toggleLogin() {
    if (this.isLoggedIn()) {
      this.isLoggedIn.set(false);
      this.currentUser.set(null);
    } else {
      this.isLoggedIn.set(true);
      this.currentUser.set({
        name: 'Mustafa',
        avatar: '/assts/imge/USER/USER.png',
        isVerified: false
      });
    }
  }

  locations = [
    'All Locations',
    'Riyadh',
    'Jeddah',
    'Makkah',
    'Madinah',
    'Dammam',
    'Khobar'
  ];

  // Main categories shown in navbar bottom bar
  mainCategories = [
     { name: 'Home', icon: 'home', link: '/home' },
    { name: 'Vehicles', icon: 'car', link: '/category' },
    { name: 'Properties', icon: 'home', link: '/properties' },
    { name: 'Mobiles & Tablets', icon: 'mobile', link: '/mobiles' },
    { name: 'Electronics & Appliances', icon: 'tv', link: '/electronics' },
    { name: 'Home & Office Furniture', icon: 'furniture', link: '/furniture' },
    { name: 'Fashions', icon: 'fashion', link: '/fashions' },
    { name: 'Health & Beauty', icon: 'beauty', link: '/beauty' },
  ];

  // All categories with subcategories for mega menu
  allCategories: Category[] = [
    {
      name: 'Auto',
      icon: 'car',
      link: '/auto',
      subcategories: [
        { name: 'Cars', link: '/cars', items: ['Coupe', 'Sedan', '4x4', 'Cross over'] },
        { name: 'Motorcycles', link: '/motorcycles', items: ['Karting', 'Motorcycles', 'Scooters', 'Snow Mobiles'] },
        { name: 'Trucks & Special equipment', link: '/trucks', items: ['Trucks', 'Agriculture machinery', 'Tractor trucks', 'Trailers', 'Excavators', '+8 more'] },
        { name: 'Spare Parts & Accessories', link: '/spare-parts', items: ['Spare Parts', 'Tires, rims & wheels', 'Audio & video equipment', 'Accessories', 'Roof racks & towbars', '+6 more'] }
      ]
    },
    {
      name: 'Real estate',
      icon: 'home',
      link: '/real-estate',
      subcategories: []
    },
    {
      name: 'Fashion',
      icon: 'fashion',
      link: '/fashion',
      subcategories: []
    },
    {
      name: 'For Home',
      icon: 'furniture',
      link: '/for-home',
      subcategories: []
    },
    {
      name: 'Services',
      icon: 'services',
      link: '/services',
      subcategories: []
    },
    {
      name: 'Hobbies',
      icon: 'hobbies',
      link: '/hobbies',
      subcategories: []
    },
    {
      name: 'Pets',
      icon: 'pets',
      link: '/pets',
      subcategories: []
    },
    {
      name: 'Electronics',
      icon: 'electronics',
      link: '/electronics',
      subcategories: []
    },
    {
      name: 'Children',
      icon: 'children',
      link: '/children',
      subcategories: []
    },
    {
      name: 'Equipments',
      icon: 'equipments',
      link: '/equipments',
      subcategories: []
    },
    {
      name: 'Accommodation for travel',
      icon: 'travel',
      link: '/accommodation',
      subcategories: []
    },
    {
      name: 'Beauty & Health',
      icon: 'beauty',
      link: '/beauty-health',
      subcategories: []
    },
    {
      name: 'Spare Parts',
      icon: 'parts',
      link: '/spare-parts',
      subcategories: []
    }
  ];

  // Profile menu items
  profileMenuItems = [
    { name: 'Favourites & Saved Ads', icon: 'heart', link: '/favourites' },
    { name: 'Inbox', icon: 'inbox', link: '/chat' },
    { name: 'Liked ads', icon: 'thumbs-up', link: '/liked' },
    { name: 'Partner with Rahim', icon: 'handshake', link: '/partner', subtitle: 'Post Ads & get optimized' },
    { name: 'Help and Support', icon: 'help', link: '/help' },
    { name: 'Settings', icon: 'settings', link: '/settings' },
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;

    // Close dropdowns when clicking outside
    if (!target.closest('.location-dropdown')) {
      this.showLocationDropdown.set(false);
    }
    if (!target.closest('.profile-dropdown')) {
      this.showProfileDropdown.set(false);
    }
    if (!target.closest('.all-categories-wrapper')) {
      this.showAllCategoriesMenu.set(false);
      this.activeCategory.set(null);
    }
    if (!target.closest('.language-dropdown')) {
      this.showLanguageDropdown.set(false);
    }
  }

  onSearch() {
    console.log('Searching for:', this.searchQuery(), 'in', this.selectedLocation());
  }

  toggleLocationDropdown() {
    this.showLocationDropdown.update(val => !val);
  }

  selectLocation(location: string) {
    this.selectedLocation.set(location);
    this.showLocationDropdown.set(false);
  }

  toggleAllCategories() {
    this.showAllCategoriesMenu.update(val => !val);
    if (this.showAllCategoriesMenu()) {
      // Set first category as active when opening
      this.activeCategory.set(this.allCategories[0]?.name || null);
    } else {
      this.activeCategory.set(null);
    }
  }

  toggleProfileDropdown() {
    this.showProfileDropdown.update(val => !val);
  }

  toggleMobileMenu() {
    this.showMobileMenu.update(val => !val);
    // Lock body scroll when mobile menu is open
    if (this.showMobileMenu()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  setActiveCategory(categoryName: string) {
    this.activeCategory.set(categoryName);
  }

  logout() {
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    this.showProfileDropdown.set(false);
  }

  toggleLanguageDropdown() {
    this.showLanguageDropdown.update(val => !val);
  }

  selectLanguage(language: { code: string; name: string; shortName: string; flag: string }) {
    this.selectedLanguage.set(language);
    this.showLanguageDropdown.set(false);
  }
}
