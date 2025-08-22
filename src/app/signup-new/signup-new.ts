import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FlashMessageService } from './flash-message/flash-message';



@Component({
  selector: 'app-signup-new',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup-new.html',
  styleUrls: ['./signup-new.scss'],
})
export class SignupNew {
  isLoading = false; // shows loading spinner or disables form
  showSignupPassword = false; // toggle password visibility

  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    branch: string;
    year: string;
  } = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      branch: '',
      year: ''
    };


  constructor(
    private router: Router,
    private flashMsgService: FlashMessageService
  ) { }

  // Used to toggle password visibility
  toggleSignupPasswordVisibility() {
    this.showSignupPassword = !this.showSignupPassword;
  }

  // Final form submission logic
  onSubmit(form: any) {
    if (!form.valid) return;

    this.isLoading = true;

    setTimeout(() => {
      console.log('First Name:', this.user.firstName);
      console.log('Last Name:', this.user.lastName);
      console.log('Email:', this.user.email);
      console.log('Phone:', this.user.phone);
      console.log('Password:', this.user.password);
      console.log('Branch:', this.user.branch);
      console.log('Year:', this.user.year);

      this.flashMsgService.setMessage('Signup successful!');
      this.router.navigate(['/new-dashboard']);

      // Reset form
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        branch: '',
        year: ''
      };

      form.resetForm();
      this.isLoading = false;
    }, 2000);
  }
}