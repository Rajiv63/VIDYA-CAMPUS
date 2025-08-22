import { Component, OnInit } from '@angular/core';
import { FlashMessageService } from '../flash-message/flash-message';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-dashboard',
  imports: [CommonModule],
  templateUrl: './new-dashboard.html',
  styleUrl: './new-dashboard.scss'
})
export class NewDashboard implements OnInit {
  message: string = '';
  flashMessage: any;

  constructor(
    private flashMsgService: FlashMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = this.flashMsgService.getMessage();

    if (this.message) {
      setTimeout(() => {
        this.router.navigate(['/login']); // Navigate after 5 seconds
      }, 5000);
    }
  }
}

