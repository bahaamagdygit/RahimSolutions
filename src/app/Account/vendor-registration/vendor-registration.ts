import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideImge } from '../side-imge/side-imge';

interface Document {
  documentType: string;
  expiryDate: string;
  documentImage: File | null;
  imagePreview: string | null;
}

@Component({
  selector: 'app-vendor-registration',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SideImge],
  templateUrl: './vendor-registration.html',
  styleUrl: './vendor-registration.css',
})
export class VendorRegistration {
  currentStep = signal(1);
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  selectedCountryCode = signal('+1');

  // Step 1: General Information
  generalInfoForm: FormGroup;

  // Step 2: Company Information
  companyInfoForm: FormGroup;

  // Step 3: Company Documents
  documentsForm: FormGroup;

  countryCodes = [
    { code: '+1', flag: '🇺🇸', country: 'US' },
    { code: '+44', flag: '🇬🇧', country: 'UK' },
    { code: '+91', flag: '🇮🇳', country: 'India' },
    { code: '+86', flag: '🇨🇳', country: 'China' },
    { code: '+81', flag: '🇯🇵', country: 'Japan' },
  ];

  companySizes = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' },
  ];

  companyTypes = [
    { value: 'sole-proprietorship', label: 'Sole Proprietorship' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'llc', label: 'Limited Liability Company (LLC)' },
    { value: 'corporation', label: 'Corporation' },
    { value: 'nonprofit', label: 'Non-Profit Organization' },
  ];

  documentTypes = [
    { value: 'business-license', label: 'Business License' },
    { value: 'tax-certificate', label: 'Tax Certificate' },
    { value: 'id-card', label: 'ID Card' },
    { value: 'passport', label: 'Passport' },
    { value: 'incorporation-certificate', label: 'Incorporation Certificate' },
  ];

  documents = signal<Document[]>([{
    documentType: '',
    expiryDate: '',
    documentImage: null,
    imagePreview: null
  }]);

  steps = [
    { number: 1, title: 'General', subtitle: 'Information' },
    { number: 2, title: 'Company', subtitle: 'Information' },
    { number: 3, title: 'Company', subtitle: 'Documents' },
  ];

  constructor(private fb: FormBuilder) {
    // Step 1: General Information Form
    this.generalInfoForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });

    // Step 2: Company Information Form
    this.companyInfoForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      companySize: ['', [Validators.required]],
      companyType: ['', [Validators.required]],
      companyWebsite: [''],
      companyAddress: ['', [Validators.required]]
    });

    // Step 3: Documents Form
    this.documentsForm = this.fb.group({
      documents: this.fb.array([])
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

  onCountryCodeChange(code: string) {
    this.selectedCountryCode.set(code);
  }

  nextStep() {
    if (this.currentStep() === 1 && this.generalInfoForm.valid) {
      this.currentStep.set(2);
    } else if (this.currentStep() === 2 && this.companyInfoForm.valid) {
      this.currentStep.set(3);
    } else {
      this.markFormTouched(this.getCurrentForm());
    }
  }

  previousStep() {
    if (this.currentStep() > 1) {
      this.currentStep.set(this.currentStep() - 1);
    }
  }

  goToStep(step: number) {
    if (step < this.currentStep()) {
      this.currentStep.set(step);
    }
  }

  getCurrentForm(): FormGroup {
    switch (this.currentStep()) {
      case 1: return this.generalInfoForm;
      case 2: return this.companyInfoForm;
      case 3: return this.documentsForm;
      default: return this.generalInfoForm;
    }
  }

  markFormTouched(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control?.invalid) {
        control.markAsTouched();
      }
    });
  }

  // Document handling
  addDocument() {
    const currentDocs = this.documents();
    this.documents.set([...currentDocs, {
      documentType: '',
      expiryDate: '',
      documentImage: null,
      imagePreview: null
    }]);
  }

  removeDocument(index: number) {
    const currentDocs = this.documents();
    if (currentDocs.length > 1) {
      this.documents.set(currentDocs.filter((_, i) => i !== index));
    }
  }

  onDocumentTypeChange(index: number, value: string) {
    const currentDocs = [...this.documents()];
    currentDocs[index] = { ...currentDocs[index], documentType: value };
    this.documents.set(currentDocs);
  }

  onExpiryDateChange(index: number, value: string) {
    const currentDocs = [...this.documents()];
    currentDocs[index] = { ...currentDocs[index], expiryDate: value };
    this.documents.set(currentDocs);
  }

  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const currentDocs = [...this.documents()];
        currentDocs[index] = {
          ...currentDocs[index],
          documentImage: file,
          imagePreview: e.target?.result as string
        };
        this.documents.set(currentDocs);
      };

      reader.readAsDataURL(file);
    }
  }

  triggerFileInput(index: number) {
    const fileInput = document.getElementById(`fileInput-${index}`) as HTMLInputElement;
    fileInput?.click();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent, index: number) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const currentDocs = [...this.documents()];
        currentDocs[index] = {
          ...currentDocs[index],
          documentImage: file,
          imagePreview: e.target?.result as string
        };
        this.documents.set(currentDocs);
      };

      reader.readAsDataURL(file);
    }
  }

  isDocumentsValid(): boolean {
    const docs = this.documents();
    return docs.every(doc => doc.documentType && doc.expiryDate && doc.documentImage);
  }

  onSubmit() {
    if (this.generalInfoForm.valid && this.companyInfoForm.valid && this.isDocumentsValid()) {
      const formData = {
        generalInfo: {
          ...this.generalInfoForm.value,
          countryCode: this.selectedCountryCode()
        },
        companyInfo: this.companyInfoForm.value,
        documents: this.documents()
      };
      console.log('Vendor Registration Data:', formData);
      // Add your submission logic here
    } else {
      console.log('Form is invalid');
    }
  }

  getErrorMessage(formName: string, fieldName: string): string {
    let form: FormGroup;
    switch (formName) {
      case 'generalInfo': form = this.generalInfoForm; break;
      case 'companyInfo': form = this.companyInfoForm; break;
      default: form = this.generalInfoForm;
    }

    const control = form.get(fieldName);
    if (control?.hasError('required')) {
      return `${this.formatFieldName(fieldName)} is required`;
    }
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Minimum ${minLength} characters required`;
    }
    if (control?.hasError('pattern')) {
      return 'Please enter a valid 10-digit phone number';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('passwordMismatch')) {
      return 'Passwords do not match';
    }
    return '';
  }

  formatFieldName(fieldName: string): string {
    return fieldName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }
}
