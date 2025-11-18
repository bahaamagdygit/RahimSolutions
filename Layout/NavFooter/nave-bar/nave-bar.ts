import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nave-bar',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './nave-bar.html',
  styleUrl: './nave-bar.css',
})
export class NaveBar {
  searchQuery = signal('');
  showCategoriesDropdown = signal(false);
  showLanguageDropdown = signal(false);
  showMobileMenu = signal(false);
  selectedLanguage = signal({ code: 'ar', name: 'اللغة العربية', flag: 'https://flagcdn.com/w20/sa.png' });

  languages = [
    { code: 'ar', name: 'اللغة العربية', flag: 'https://flagcdn.com/w20/sa.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w20/es.png' }
  ];

  categories = [
    'Vehicles',
    'Properties',
    'Mobiles & Tableta',
    'Home & Office Furniture',
    'Electronics & Appliances'
  ];

  mainCategories = [
    { name: 'Vehicles', link: '/vehicles' },
    { name: 'Properties', link: '/properties' },
    { name: 'Mobiles & Tableta', link: '/mobiles' },
    { name: 'Home & Office Furniture', link: '/furniture' },
    { name: 'Electronics & Appliances', link: '/electronics' },
    { name: 'Home & Office Furniture', link: '/furniture2' }
  ];

  onSearch() {
    console.log('Searching for:', this.searchQuery());
  }

  toggleCategories() {
    this.showCategoriesDropdown.update(val => !val);
  }

  toggleLanguageDropdown() {
    this.showLanguageDropdown.update(val => !val);
  }

  selectLanguage(language: any) {
    this.selectedLanguage.set(language);
    this.showLanguageDropdown.set(false);
  }

  toggleMobileMenu() {
    this.showMobileMenu.update(val => !val);
  }
}
