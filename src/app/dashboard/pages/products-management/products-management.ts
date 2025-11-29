import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'sold';
  views: number;
  createdAt: string;
}

@Component({
  selector: 'app-products-management',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products-management.html',
  styleUrl: './products-management.css',
})
export class ProductsManagement {
  searchQuery = signal('');
  selectedCategory = signal('all');
  selectedStatus = signal('all');
  viewMode = signal<'grid' | 'list'>('list');
  selectedProducts = signal<number[]>([]);

  categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'home', label: 'Home & Furniture' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'services', label: 'Services' },
  ];

  statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'sold', label: 'Sold' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max 256GB',
      image: '/assts/imge/products/phone.jpg',
      category: 'Electronics',
      price: 4500,
      stock: 12,
      status: 'active',
      views: 1250,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'MacBook Pro 16" M2',
      image: '/assts/imge/products/laptop.jpg',
      category: 'Electronics',
      price: 8900,
      stock: 5,
      status: 'active',
      views: 890,
      createdAt: '2024-01-12'
    },
    {
      id: 3,
      name: 'AirPods Pro 2nd Gen',
      image: '/assts/imge/products/airpods.jpg',
      category: 'Electronics',
      price: 950,
      stock: 45,
      status: 'active',
      views: 2100,
      createdAt: '2024-01-10'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S23 Ultra',
      image: '/assts/imge/products/samsung.jpg',
      category: 'Electronics',
      price: 3200,
      stock: 8,
      status: 'active',
      views: 756,
      createdAt: '2024-01-08'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5',
      image: '/assts/imge/products/ps5.jpg',
      category: 'Electronics',
      price: 2100,
      stock: 0,
      status: 'sold',
      views: 3400,
      createdAt: '2024-01-05'
    },
    {
      id: 6,
      name: 'Designer Leather Jacket',
      image: '/assts/imge/products/jacket.jpg',
      category: 'Fashion',
      price: 850,
      stock: 15,
      status: 'inactive',
      views: 320,
      createdAt: '2024-01-03'
    },
    {
      id: 7,
      name: 'Modern Office Desk',
      image: '/assts/imge/products/desk.jpg',
      category: 'Home & Furniture',
      price: 1200,
      stock: 7,
      status: 'active',
      views: 445,
      createdAt: '2024-01-01'
    },
    {
      id: 8,
      name: 'Apple Watch Series 9',
      image: '/assts/imge/products/watch.jpg',
      category: 'Electronics',
      price: 1800,
      stock: 20,
      status: 'active',
      views: 980,
      createdAt: '2023-12-28'
    }
  ];

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchQuery().toLowerCase());
      const matchesCategory = this.selectedCategory() === 'all' ||
        product.category.toLowerCase() === this.selectedCategory();
      const matchesStatus = this.selectedStatus() === 'all' ||
        product.status === this.selectedStatus();
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  toggleViewMode() {
    this.viewMode.set(this.viewMode() === 'grid' ? 'list' : 'grid');
  }

  toggleProductSelection(productId: number) {
    const current = this.selectedProducts();
    if (current.includes(productId)) {
      this.selectedProducts.set(current.filter(id => id !== productId));
    } else {
      this.selectedProducts.set([...current, productId]);
    }
  }

  toggleAllProducts() {
    if (this.selectedProducts().length === this.filteredProducts.length) {
      this.selectedProducts.set([]);
    } else {
      this.selectedProducts.set(this.filteredProducts.map(p => p.id));
    }
  }

  isProductSelected(productId: number): boolean {
    return this.selectedProducts().includes(productId);
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'active': 'status-active',
      'inactive': 'status-inactive',
      'sold': 'status-sold'
    };
    return classes[status] || '';
  }

  formatCurrency(amount: number): string {
    return `SAR ${amount.toLocaleString()}`;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  editProduct(productId: number) {
    console.log('Edit product:', productId);
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products = this.products.filter(p => p.id !== productId);
    }
  }

  bulkAction(action: string) {
    console.log('Bulk action:', action, 'on products:', this.selectedProducts());
  }
}
