import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance.html',
  styleUrls: ['./attendance.scss'],
})
export class Attendance {
  subjects = ['DBMS', 'Java', 'OS'];
  attendance: { [key: string]: { total: number; present: number } } = {};
  selectedSubject = this.subjects[0];
  targetPercentage = 75;

  ngOnInit() {
    const data = localStorage.getItem('studentAttendance');
    this.attendance = data ? JSON.parse(data) : this.initializeAttendance();
  }

  initializeAttendance() {
    const initial: { [key: string]: { total: number; present: number } } = {};
    this.subjects.forEach(subject => {
      initial[subject] = { total: 0, present: 0 };
    });
    return initial;
  }

  save() {
    localStorage.setItem('studentAttendance', JSON.stringify(this.attendance));
  }

  addClass(subject: string) {
    this.attendance[subject].total++;
    this.save();
  }

  markPresent(subject: string) {
    this.attendance[subject].total++;
    this.attendance[subject].present++;
    this.save();
  }

  markFullDay() {
    this.subjects.forEach(subject => {
      this.markPresent(subject);
    });
  }

  getPercentage(subject: string): string {
    const { total, present } = this.attendance[subject];
    return total === 0 ? '0' : ((present / total) * 100).toFixed(2);
  }

  getClassesNeeded(subject: string): number {
    const { total, present } = this.attendance[subject];
    const required = Math.ceil((this.targetPercentage * total - 100 * present) / (100 - this.targetPercentage));
    return required > 0 ? required : 0;
  }
}