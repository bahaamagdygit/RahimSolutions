import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  emailAddress = signal('');
  currentYear = new Date().getFullYear();

  onSubscribe() {
    if (this.emailAddress()) {
      console.log('Subscribe email:', this.emailAddress());
      // Add your subscription logic here
      this.emailAddress.set('');
    }
  }
}
