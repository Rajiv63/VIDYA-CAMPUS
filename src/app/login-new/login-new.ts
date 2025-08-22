import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-new',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login-new.html',
  styleUrls: ['./login-new.scss']
})
export class LoginNew {
 showPassword = false;
  loginError = '';
  isLoading = false;

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;

      // Allow any valid domain
      const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailPattern.test(email)) {
        this.isLoading = true;

        setTimeout(() => {
          this.router.navigate(['/studentsdashboard/']);
          form.reset();
          this.loginError = '';
          this.isLoading = false;
        }, 2000); // simulate login delay
      } else {
        this.loginError = 'Please enter a valid email address.';
      }
    } else {
      this.loginError = 'Please fill out the form correctly.';
    }
  }
}