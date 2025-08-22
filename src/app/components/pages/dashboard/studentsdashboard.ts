import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import { Attendance } from '../../attendance/attendance';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, FullCalendarModule, Attendance],
  templateUrl: './studentsdashboard.html',
  styleUrls: ['./studentsdashboard.scss']
})
export class studentsdashboard implements AfterViewInit {
  selectedBranch = '';
  selectedYear = '';
  selectedSection = '';
  activeSection = '';
  selectedSemester = '';
  
  studentData: any;


  syllabus = '';
  timetable = '';
  room = '';
  lab = '';

  branches = ['CSE', 'IT', 'ECE', 'EEE'];
  sections = ['A', 'B', 'C'];
  years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  semesters = ['1st Sem', '2nd Sem', '3rd Sem', '4th Sem', '5th Sem', '6th Sem', '7th Sem', '8th Sem'];


  private calendar?: Calendar;
  private calendarRendered = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const data = localStorage.getItem('loggedInStudent');
    console.log("Student Data:", data);
    this.studentData = data ? JSON.parse(data) : null;

    if (!this.studentData) {
      this.router.navigate(['/studentsdashboard']);
    }
  }


  ngAfterViewInit(): void {
    if (this.activeSection === 'Calendar') {
      this.renderCalendarWhenReady();
    }
  }

  get studentName(): string {
    return this.studentData?.name || 'Student';
  }

  get studentEmail(): string {
    return this.studentData?.email || '';
  }

  // onChange() {
  //   if (this.selectedBranch && this.selectedYear) {
  //     const key = `${this.selectedBranch}_${this.selectedYear}`;
  //     this.syllabus = localStorage.getItem(`${key}_syllabus`) || 'Syllabus not available.';
  //     this.timetable = localStorage.getItem(`${key}_timetable`) || 'Timetable not available.';
  //     this.room = localStorage.getItem(`${key}_room`) || 'Room info not available.';
  //     this.lab = localStorage.getItem(`${key}_lab`) || 'Lab info not available.';
  //   }
  // }
  onChange() {
    if (this.selectedBranch && this.selectedYear && this.selectedSection && this.selectedSemester) {
      const key = `${this.selectedBranch}-${this.selectedYear}-${this.selectedSection}-${this.selectedSemester}`;

      this.room = `Room details for ${key}`;
      this.lab = `Lab details for ${key}`;
      this.syllabus = `Syllabus for ${key}`;
      this.timetable = `Timetable for ${key}`;

      console.log('Loaded Data for:', key);
    }
  }
  // goToSyllabusPage() {
  //   if (
  //     this.selectedBranch &&
  //     this.selectedYear &&
  //     this.selectedSection &&
  //     this.selectedSemester
  //   ) {
      goToSyllabusPage() {
  if (this.selectedBranch && this.selectedYear && this.selectedSemester) {
    this.router.navigateByUrl('/syllabus', {
      state: {
        branch: this.selectedBranch,
        year: this.selectedYear,
        semester: this.selectedSemester
      }
    });
  } else {
    alert('Please select Branch, Year, and Semester first.');
  }
}


goTo(section: string) {
  // If clicking the same section again, close it
  if (this.activeSection === section) {
    this.activeSection = '';
  } else {
    this.activeSection = section;

    if (section === 'Calendar') {
      this.renderCalendarWhenReady();
    }
  }
}

  private renderCalendarWhenReady() {
    if (this.calendarRendered) return;
    setTimeout(() => {
      const el = document.getElementById('calendar');
      if (el) {
        this.calendar = new Calendar(el, {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          events: [
            { title: 'Orientation', date: '2025-08-01' },
            { title: 'Exam', date: '2025-08-10' }
          ]
        });
        this.calendar.render();
        this.calendarRendered = true;
      }
    }, 0);
  }

  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}