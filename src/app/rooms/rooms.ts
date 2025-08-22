import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms {
  branch: string = '';
  year: string = '';
  roomDetails: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.branch = this.route.snapshot.paramMap.get('branch') || '';
    this.year = this.route.snapshot.paramMap.get('year') || '';

    // Load room details based on branch and year
    this.loadRooms();
  }

  loadRooms() {
    const allRoomData: any = {
      CSE: {
        '1': ['CSE-101', 'CSE-102'],
        '2': ['CSE-201', 'CSE-202'],
      },
      ECE: {
        '1': ['ECE-101', 'ECE-102'],
        '2': ['ECE-201', 'ECE-202'],
      }
    };

    this.roomDetails = allRoomData[this.branch]?.[this.year] || [];
  }
}

