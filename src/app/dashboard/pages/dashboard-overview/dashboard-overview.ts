import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface StatCard {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
}

interface RecentOrder {
  id: string;
  product: string;
  productImage: string;
  customer: string;
  date: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
}

interface TopProduct {
  id: number;
  name: string;
  image: string;
  sales: number;
  revenue: number;
  stock: number;
}

interface Activity {
  id: number;
  type: 'order' | 'review' | 'message' | 'product';
  message: string;
  time: string;
}

@Component({
  selector: 'app-dashboard-overview',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-overview.html',
  styleUrl: './dashboard-overview.css',
})
export class DashboardOverview {
  currentDate = signal(new Date());

  statsCards: StatCard[] = [
    {
      title: 'Total Revenue',
      value: 'SAR 45,250',
      change: 12.5,
      changeType: 'increase',
      icon: 'revenue',
      color: 'purple'
    },
    {
      title: 'Total Orders',
      value: '156',
      change: 8.2,
      changeType: 'increase',
      icon: 'orders',
      color: 'blue'
    },
    {
      title: 'Active Products',
      value: '48',
      change: 3.1,
      changeType: 'increase',
      icon: 'products',
      color: 'green'
    },
    {
      title: 'Total Views',
      value: '12,845',
      change: 2.4,
      changeType: 'decrease',
      icon: 'views',
      color: 'orange'
    }
  ];

  recentOrders: RecentOrder[] = [
    {
      id: 'ORD-001',
      product: 'iPhone 14 Pro Max',
      productImage: '/assts/imge/products/phone.jpg',
      customer: 'Ahmed Mohammed',
      date: '2024-01-15',
      amount: 4500,
      status: 'completed'
    },
    {
      id: 'ORD-002',
      product: 'MacBook Pro 16"',
      productImage: '/assts/imge/products/laptop.jpg',
      customer: 'Sara Ali',
      date: '2024-01-14',
      amount: 8900,
      status: 'processing'
    },
    {
      id: 'ORD-003',
      product: 'AirPods Pro',
      productImage: '/assts/imge/products/airpods.jpg',
      customer: 'Khalid Hassan',
      date: '2024-01-14',
      amount: 950,
      status: 'pending'
    },
    {
      id: 'ORD-004',
      product: 'Samsung Galaxy S23',
      productImage: '/assts/imge/products/samsung.jpg',
      customer: 'Fatima Omar',
      date: '2024-01-13',
      amount: 3200,
      status: 'completed'
    },
    {
      id: 'ORD-005',
      product: 'iPad Air',
      productImage: '/assts/imge/products/ipad.jpg',
      customer: 'Mohammed Saeed',
      date: '2024-01-13',
      amount: 2400,
      status: 'cancelled'
    }
  ];

  topProducts: TopProduct[] = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      image: '/assts/imge/products/phone.jpg',
      sales: 45,
      revenue: 202500,
      stock: 12
    },
    {
      id: 2,
      name: 'MacBook Pro 16"',
      image: '/assts/imge/products/laptop.jpg',
      sales: 28,
      revenue: 249200,
      stock: 8
    },
    {
      id: 3,
      name: 'AirPods Pro',
      image: '/assts/imge/products/airpods.jpg',
      sales: 89,
      revenue: 84550,
      stock: 45
    },
    {
      id: 4,
      name: 'Samsung Galaxy S23',
      image: '/assts/imge/products/samsung.jpg',
      sales: 34,
      revenue: 108800,
      stock: 15
    }
  ];

  recentActivities: Activity[] = [
    { id: 1, type: 'order', message: 'New order #ORD-156 received from Ahmed', time: '5 min ago' },
    { id: 2, type: 'review', message: 'New 5-star review on iPhone 14 Pro Max', time: '12 min ago' },
    { id: 3, type: 'message', message: 'New message from Sara regarding order', time: '25 min ago' },
    { id: 4, type: 'product', message: 'Stock alert: AirPods Pro running low', time: '1 hour ago' },
    { id: 5, type: 'order', message: 'Order #ORD-155 marked as completed', time: '2 hours ago' },
  ];

  // Chart data for sales overview
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values: [12000, 19000, 15000, 25000, 22000, 30000, 45000]
  };

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'pending': 'status-pending',
      'processing': 'status-processing',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled'
    };
    return classes[status] || '';
  }

  getActivityIcon(type: string): string {
    return type;
  }

  formatCurrency(amount: number): string {
    return `SAR ${amount.toLocaleString()}`;
  }
}
