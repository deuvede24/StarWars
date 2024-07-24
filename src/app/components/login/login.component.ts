
/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterOutlet],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';
  submitted = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched || this.submitted) : false;
  }

  login(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      this.markAllFieldsAsTouched(); // Marca todos los campos como tocados
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        alert('Login successful');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Invalid credentials';
      },
    });
  }

  markAllFieldsAsTouched() {
    Object.values(this.loginForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';
  submitted = false;
  returnUrl: string = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched || this.submitted) : false;
  }

  login(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      this.markAllFieldsAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        alert('Login successful');
        this.router.navigate([this.returnUrl]);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Invalid credentials';
      },
    });
  }

  markAllFieldsAsTouched() {
    Object.values(this.loginForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}

