import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  product: string;
  productImage: string;
  date: string;
  amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'completed' | 'cancelled';
  paymentMethod: string;
}

@Component({
  selector: 'app-orders-management',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './orders-management.html',
  styleUrl: './orders-management.css',
})
export class OrdersManagement {
  searchQuery = signal('');
  selectedStatus = signal('all');
  selectedDateRange = signal('all');
  selectedOrder = signal<Order | null>(null);

  statuses = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  dateRanges = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' },
  ];

  orders: Order[] = [
    {
      id: 'ORD-001',
      customer: { name: 'Ahmed Mohammed', email: 'ahmed@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'iPhone 14 Pro Max 256GB',
      productImage: '/assts/imge/products/phone.jpg',
      date: '2024-01-15T10:30:00',
      amount: 4500,
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'ORD-002',
      customer: { name: 'Sara Ali', email: 'sara@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'MacBook Pro 16" M2',
      productImage: '/assts/imge/products/laptop.jpg',
      date: '2024-01-14T14:20:00',
      amount: 8900,
      status: 'processing',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'ORD-003',
      customer: { name: 'Khalid Hassan', email: 'khalid@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'AirPods Pro 2nd Gen',
      productImage: '/assts/imge/products/airpods.jpg',
      date: '2024-01-14T09:15:00',
      amount: 950,
      status: 'pending',
      paymentMethod: 'Cash on Delivery'
    },
    {
      id: 'ORD-004',
      customer: { name: 'Fatima Omar', email: 'fatima@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'Samsung Galaxy S23 Ultra',
      productImage: '/assts/imge/products/samsung.jpg',
      date: '2024-01-13T16:45:00',
      amount: 3200,
      status: 'shipped',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'ORD-005',
      customer: { name: 'Mohammed Saeed', email: 'mohammed@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'iPad Air 5th Gen',
      productImage: '/assts/imge/products/ipad.jpg',
      date: '2024-01-13T11:30:00',
      amount: 2400,
      status: 'cancelled',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'ORD-006',
      customer: { name: 'Layla Ibrahim', email: 'layla@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'Sony PlayStation 5',
      productImage: '/assts/imge/products/ps5.jpg',
      date: '2024-01-12T13:00:00',
      amount: 2100,
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'ORD-007',
      customer: { name: 'Omar Youssef', email: 'omar@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'Apple Watch Series 9',
      productImage: '/assts/imge/products/watch.jpg',
      date: '2024-01-11T10:00:00',
      amount: 1800,
      status: 'processing',
      paymentMethod: 'Cash on Delivery'
    },
    {
      id: 'ORD-008',
      customer: { name: 'Nora Abdullah', email: 'nora@example.com', avatar: '/assts/imge/USER/USER.png' },
      product: 'Modern Office Desk',
      productImage: '/assts/imge/products/desk.jpg',
      date: '2024-01-10T15:30:00',
      amount: 1200,
      status: 'pending',
      paymentMethod: 'Bank Transfer'
    }
  ];

  orderStats = [
    { label: 'All Orders', value: 156, color: 'blue' },
    { label: 'Pending', value: 12, color: 'yellow' },
    { label: 'Processing', value: 24, color: 'purple' },
    { label: 'Completed', value: 108, color: 'green' },
    { label: 'Cancelled', value: 12, color: 'red' },
  ];

  get filteredOrders(): Order[] {
    return this.orders.filter(order => {
      const matchesSearch = order.id.toLowerCase().includes(this.searchQuery().toLowerCase()) ||
        order.customer.name.toLowerCase().includes(this.searchQuery().toLowerCase()) ||
        order.product.toLowerCase().includes(this.searchQuery().toLowerCase());
      const matchesStatus = this.selectedStatus() === 'all' || order.status === this.selectedStatus();
      return matchesSearch && matchesStatus;
    });
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'pending': 'status-pending',
      'processing': 'status-processing',
      'shipped': 'status-shipped',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled'
    };
    return classes[status] || '';
  }

  formatCurrency(amount: number): string {
    return `SAR ${amount.toLocaleString()}`;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  formatTime(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  viewOrder(order: Order) {
    this.selectedOrder.set(order);
  }

  closeOrderDetails() {
    this.selectedOrder.set(null);
  }

  updateOrderStatus(orderId: string, newStatus: Order['status']) {
    const orderIndex = this.orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
      this.orders[orderIndex] = { ...this.orders[orderIndex], status: newStatus };
      if (this.selectedOrder() && this.selectedOrder()!.id === orderId) {
        this.selectedOrder.set({ ...this.orders[orderIndex] });
      }
    }
  }

  contactCustomer(order: Order) {
    console.log('Opening chat with:', order.customer.email);
  }
}
