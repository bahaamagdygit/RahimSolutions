import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChartData {
  labels: string[];
  values: number[];
}

interface TopCategory {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-analytics',
  imports: [CommonModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css',
})
export class Analytics {
  selectedPeriod = signal('30d');

  periods = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 3 months' },
    { value: '1y', label: 'Last year' },
  ];

  overviewStats = [
    { label: 'Total Views', value: '45,250', change: 12.5, trend: 'up' },
    { label: 'Total Clicks', value: '8,420', change: 8.2, trend: 'up' },
    { label: 'Conversion Rate', value: '3.2%', change: -1.4, trend: 'down' },
    { label: 'Avg. Order Value', value: 'SAR 2,150', change: 5.8, trend: 'up' },
  ];

  revenueData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values: [28000, 35000, 32000, 42000, 38000, 52000, 45000]
  };

  visitsData: ChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [1200, 1900, 1500, 2200, 1800, 2800, 2400]
  };

  topCategories: TopCategory[] = [
    { name: 'Electronics', value: 42500, percentage: 45, color: '#667eea' },
    { name: 'Fashion', value: 18200, percentage: 20, color: '#22c55e' },
    { name: 'Home & Furniture', value: 12800, percentage: 14, color: '#f59e0b' },
    { name: 'Vehicles', value: 9500, percentage: 10, color: '#ec4899' },
    { name: 'Services', value: 8400, percentage: 9, color: '#8b5cf6' },
    { name: 'Others', value: 1850, percentage: 2, color: '#9ca3af' },
  ];

  topProducts = [
    { rank: 1, name: 'iPhone 14 Pro Max', views: 3250, sales: 45, revenue: 202500 },
    { rank: 2, name: 'MacBook Pro 16"', views: 2890, sales: 28, revenue: 249200 },
    { rank: 3, name: 'AirPods Pro', views: 2450, sales: 89, revenue: 84550 },
    { rank: 4, name: 'Samsung Galaxy S23', views: 1980, sales: 34, revenue: 108800 },
    { rank: 5, name: 'iPad Air', views: 1650, sales: 25, revenue: 60000 },
  ];

  trafficSources = [
    { source: 'Direct', visits: 12500, percentage: 35 },
    { source: 'Organic Search', visits: 10800, percentage: 30 },
    { source: 'Social Media', visits: 7200, percentage: 20 },
    { source: 'Referral', visits: 3600, percentage: 10 },
    { source: 'Email', visits: 1800, percentage: 5 },
  ];

  getMaxValue(data: ChartData): number {
    return Math.max(...data.values);
  }

  formatCurrency(amount: number): string {
    return `SAR ${amount.toLocaleString()}`;
  }

  setPeriod(period: string) {
    this.selectedPeriod.set(period);
  }
}
