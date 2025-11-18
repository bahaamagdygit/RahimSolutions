import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SideImge } from '../side-imge/side-imge';

@Component({
  selector: 'app-otp-confirm',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SideImge],
  templateUrl: './otp-confirm.html',
  styleUrl: './otp-confirm.css',
})
export class OtpConfirm {
  otpForm: FormGroup;
  otpDigits = signal(['', '', '', '']);

  constructor(private fb: FormBuilder, private router: Router) {
    this.otpForm = this.fb.group({
      digit1: ['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
      digit2: ['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
      digit3: ['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
      digit4: ['', [Validators.required, Validators.pattern(/^[0-9]$/)]]
    });
  }

  onDigitInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value && /^[0-9]$/.test(value)) {
      if (index < 3) {
        const nextInput = document.getElementById('digit' + (index + 2)) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }

  onDigitKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {
      const prevInput = document.getElementById('digit' + index) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  onSubmit() {
    if (this.otpForm.valid) {
      const otp = Object.values(this.otpForm.value).join('');
      console.log('OTP:', otp);
      this.router.navigate(['/reset-password']);
    } else {
      Object.keys(this.otpForm.controls).forEach(key => {
        const control = this.otpForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  resendCode() {
    console.log('Resending OTP code...');
  }
}
