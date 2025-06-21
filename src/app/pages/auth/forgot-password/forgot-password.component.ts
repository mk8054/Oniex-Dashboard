import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../../../services/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  forgotForm!: FormGroup;

  toastr = inject(ToasterService);
  router = inject(Router);

  constructor() {
    this.initializeForm();
  }
  initializeForm() {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.forgotForm);
    this.toastr.showToast(
      'Password reset link sent to your email.',
      'Success',
      'success'
    );
    this.router.navigate(['/auth/login']);
  }
}
