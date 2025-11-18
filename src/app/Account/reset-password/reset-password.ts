import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SideImge } from '../side-imge/side-imge';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SideImge],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  resetPasswordForm: FormGroup;
  showPassword = signal(false);
  showConfirmPassword = signal(false);

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      console.log('Password reset successfully');
      this.router.navigate(['/login']);
    } else {
      Object.keys(this.resetPasswordForm.controls).forEach(key => {
        const control = this.resetPasswordForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.resetPasswordForm.get(fieldName);
    if (control?.hasError('required')) {
      return 'Password is required';
    }
    if (control?.hasError('minlength')) {
      return 'Password must be at least 8 characters';
    }
    if (control?.hasError('passwordMismatch')) {
      return 'Passwords do not match';
    }
    return '';
  }
}
