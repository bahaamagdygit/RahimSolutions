import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SideImge } from '../side-imge/side-imge';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SideImge],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  forgotPasswordForm: FormGroup;
  selectedCountryCode = signal('+1');

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const formData = {
        ...this.forgotPasswordForm.value,
        countryCode: this.selectedCountryCode()
      };
      console.log('Forgot Password Data:', formData);
      // Navigate to OTP confirmation
      this.router.navigate(['/otp-confirm']);
    } else {
      const control = this.forgotPasswordForm.get('phoneNumber');
      if (control?.invalid) {
        control.markAsTouched();
      }
    }
  }

  getErrorMessage(): string {
    const control = this.forgotPasswordForm.get('phoneNumber');
    if (control?.hasError('required')) {
      return 'Phone number is required';
    }
    if (control?.hasError('pattern')) {
      return 'Please enter a valid 10-digit phone number';
    }
    return '';
  }
}
