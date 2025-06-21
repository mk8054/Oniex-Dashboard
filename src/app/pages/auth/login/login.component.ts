import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../../../services/toaster.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  toastr = inject(ToasterService);

  constructor() {
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.loginForm);
    const { username, password } = this.loginForm.value;
    if (username == 'admin' && password == '1234567') {
      this.toastr.showToast('Login successful!', 'Success', 'success');
    } else {
      this.toastr.showToast(
        'Invalid email and pasword provided.',
        'Error',
        'error'
      );
    }
  }
}
