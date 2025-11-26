import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatContact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  unreadCount: number;
  isOnline: boolean;
}

interface Message {
  id: number;
  senderId: number;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'audio' | 'file';
  images?: string[];
  fileName?: string;
  fileSize?: string;
  audioDuration?: string;
  isSent: boolean;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  selectedContact = signal<ChatContact | null>(null);
  newMessage = signal('');
  searchQuery = signal('');

  contacts: ChatContact[] = [
    {
      id: 1,
      name: 'Tradeline',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor si amet',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 2,
      name: 'Xtreme Auto',
      avatar: 'assts/imge/cars/car-1.jpg',
      lastMessage: 'Lorem ipsum dolor si amet dolor si...',
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 3,
      name: 'Nike Store',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor si amet',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 4,
      name: 'Amer Group',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor si',
      unreadCount: 10,
      isOnline: false
    },
    {
      id: 5,
      name: 'H&M Store',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor si amet',
      unreadCount: 0,
      isOnline: true
    },
    {
      id: 6,
      name: 'Home Furniture',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor si amet',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 7,
      name: 'B-Tech',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor si amet',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 8,
      name: 'Kasrawy Group Auto',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor s...',
      unreadCount: 15,
      isOnline: false
    },
    {
      id: 9,
      name: 'Alahly Sabour',
      avatar: '',
      lastMessage: 'Lorem ipsum dolor si amet dolor si amet',
      unreadCount: 0,
      isOnline: false
    }
  ];

  messages: Message[] = [
    {
      id: 1,
      senderId: 2,
      content: '',
      timestamp: new Date(Date.now() - 86400000),
      type: 'audio',
      audioDuration: '0:45',
      isSent: false
    },
    {
      id: 2,
      senderId: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue eu odio tempor commodo. Nullam ut mattis eros. Cras ut orci nisi.',
      timestamp: new Date(Date.now() - 86400000),
      type: 'text',
      isSent: false
    },
    {
      id: 3,
      senderId: 2,
      content: 'Lorem ipsum dolor si amet',
      timestamp: new Date(Date.now() - 86400000),
      type: 'image',
      images: [
        'assts/imge/cars/car-1.jpg',
        'assts/imge/cars/car-2.jpg',
        'assts/imge/cars/car-3.jpg'
      ],
      isSent: false
    },
    {
      id: 4,
      senderId: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue eu odio tempor commodo. Nullam ut mattis eros. Cras ut orci nisi.',
      timestamp: new Date(Date.now() - 86400000),
      type: 'text',
      isSent: true
    },
    {
      id: 5,
      senderId: 1,
      content: '',
      timestamp: new Date(Date.now() - 86400000),
      type: 'file',
      fileName: 'File Name.ai',
      fileSize: '300kb',
      isSent: true
    },
    {
      id: 6,
      senderId: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue eu odio tempor commodo. Nullam ut mattis eros. Cras ut orci nisi.',
      timestamp: new Date(Date.now() - 86400000),
      type: 'text',
      isSent: false
    },
    {
      id: 7,
      senderId: 1,
      content: 'Lorem ipsum dolor si amet',
      timestamp: new Date(Date.now() - 86400000),
      type: 'text',
      isSent: true
    }
  ];

  constructor() {
    this.selectedContact.set(this.contacts[1]);
  }

  selectContact(contact: ChatContact) {
    this.selectedContact.set(contact);
  }

  sendMessage() {
    const message = this.newMessage().trim();
    if (message && this.selectedContact()) {
      const newMsg: Message = {
        id: this.messages.length + 1,
        senderId: 1,
        content: message,
        timestamp: new Date(),
        type: 'text',
        isSent: true
      };
      this.messages.push(newMsg);
      this.newMessage.set('');
    }
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  formatTime(date: Date): string {
    return '1 day ago';
  }

  getFilteredContacts(): ChatContact[] {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.contacts;
    return this.contacts.filter(c => c.name.toLowerCase().includes(query));
  }
}
