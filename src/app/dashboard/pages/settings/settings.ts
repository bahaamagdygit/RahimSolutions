import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  activeTab = signal('profile');
  profileForm: FormGroup;
  companyForm: FormGroup;
  notificationSettings = signal({
    emailOrders: true,
    emailMessages: true,
    emailMarketing: false,
    pushOrders: true,
    pushMessages: true,
    pushMarketing: false,
  });

  tabs = [
    { id: 'profile', label: 'Profile', icon: 'user' },
    { id: 'company', label: 'Company', icon: 'building' },
    { id: 'notifications', label: 'Notifications', icon: 'bell' },
    { id: 'security', label: 'Security', icon: 'lock' },
  ];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['Mustafa', [Validators.required]],
      lastName: ['Ahmed', [Validators.required]],
      email: ['mustafa@example.com', [Validators.required, Validators.email]],
      phone: ['+966 50 123 4567', [Validators.required]],
      bio: ['Experienced vendor specializing in electronics and mobile devices.'],
    });

    this.companyForm = this.fb.group({
      companyName: ['Rahim Solutions', [Validators.required]],
      companyType: ['llc', [Validators.required]],
      companySize: ['11-50', [Validators.required]],
      website: ['https://rahimsolutions.com'],
      address: ['123 Business District, Riyadh, Saudi Arabia'],
      description: ['Leading provider of electronics and mobile devices in the region.'],
    });
  }

  setActiveTab(tabId: string) {
    this.activeTab.set(tabId);
  }

  toggleNotification(key: string) {
    const current = this.notificationSettings();
    this.notificationSettings.set({
      ...current,
      [key]: !current[key as keyof typeof current]
    });
  }

  saveProfile() {
    if (this.profileForm.valid) {
      console.log('Profile saved:', this.profileForm.value);
    }
  }

  saveCompany() {
    if (this.companyForm.valid) {
      console.log('Company saved:', this.companyForm.value);
    }
  }

  saveNotifications() {
    console.log('Notifications saved:', this.notificationSettings());
  }
}
