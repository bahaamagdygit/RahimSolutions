import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SideImge } from '../side-imge/side-imge';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SideImge],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  showPassword = signal(false);
  selectedCountryCode = signal('+1');
  rememberMe = signal(false);

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  toggleRememberMe() {
    this.rememberMe.set(!this.rememberMe());
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = {
        ...this.loginForm.value,
        countryCode: this.selectedCountryCode(),
        rememberMe: this.rememberMe()
      };
      console.log('Login Data:', formData);
      // Add your login logic here
    } else {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  signInWithGoogle() {
    console.log('Sign in with Google');
    // Add Google sign-in logic
  }

  signInWithApple() {
    console.log('Sign in with Apple');
    // Add Apple sign-in logic
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    if (control?.hasError('required')) {
      return `${fieldName === 'phoneNumber' ? 'Phone number' : 'Password'} is required`;
    }
    if (control?.hasError('pattern')) {
      return 'Please enter a valid 10-digit phone number';
    }
    if (control?.hasError('minlength')) {
      return 'Password must be at least 8 characters';
    }
    return '';
  }
}
