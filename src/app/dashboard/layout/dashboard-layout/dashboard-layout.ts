import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

interface MenuItem {
  name: string;
  icon: string;
  link: string;
  badge?: number;
}

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  sidebarCollapsed = signal(false);
  currentUser = signal({
    name: 'Mustafa Ahmed',
    email: 'mustafa@example.com',
    avatar: '/assts/imge/USER/USER.png',
    companyName: 'Rahim Solutions',
    isVerified: true
  });

  menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { name: 'Products', icon: 'products', link: '/dashboard/products', badge: 12 },
    { name: 'Orders', icon: 'orders', link: '/dashboard/orders', badge: 5 },
    { name: 'Messages', icon: 'messages', link: '/dashboard/messages', badge: 3 },
    { name: 'Analytics', icon: 'analytics', link: '/dashboard/analytics' },
    { name: 'Reviews', icon: 'reviews', link: '/dashboard/reviews' },
    { name: 'Documents', icon: 'documents', link: '/dashboard/documents' },
  ];

  bottomMenuItems: MenuItem[] = [
    { name: 'Settings', icon: 'settings', link: '/dashboard/settings' },
    { name: 'Help & Support', icon: 'help', link: '/dashboard/support' },
  ];

  toggleSidebar() {
    this.sidebarCollapsed.update(val => !val);
  }

  logout() {
    console.log('Logging out...');
    // Add logout logic here
  }
}
