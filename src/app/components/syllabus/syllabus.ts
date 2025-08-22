import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-syllabus',
  imports: [CommonModule, FormsModule],
  templateUrl: './syllabus.html',
  styleUrls: ['./syllabus.scss'],
})
export class Syllabus implements OnInit {
//   branch: string = '';
//   year: string = '';
//   section: string = '';
//   semester: string = '';

//   syllabusData: string = '';
//   submitted = false;

//   branches = ['CSE', 'IT', 'ECE'];
//   years = ['1st', '2nd', '3rd', '4th'];
//   sections = ['A', 'B', 'C'];
//   semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     // You can leave this empty or add logic if needed
//     console.log('Syllabus page initialized');
//   }

//   onSubmit() {
//     if (this.branch && this.year && this.section && this.semester) {
//       this.syllabusData = `Syllabus for ${this.branch} - ${this.year} Year - Semester ${this.semester}`;
//       this.submitted = true;
//     } else {
//       alert('Please select all fields.');
//     }
//   }

//   goBack() {
//     this.router.navigate(['/studentsdashboard']);
//   }
// }
    branch = '';
  year = '';
  semester = '';
  searchTerm = '';
  selectedSubject: any = null;
  subjects: any[] = [];
  unitExpanded: boolean[] = [];

  constructor(private location: Location) {}

  ngOnInit(): void {
    const params = history.state;
    this.branch = params.branch ?? '';
    this.year = params.year ?? '';
    this.semester = params.semester ?? '';

    this.loadSubjects();
  }

  loadSubjects(): void {
    this.subjects = [
      {
        name: 'Mathematics',
        units: [
          'Unit 1: Sets, Relations, and Functions',
          'Unit 2: Trigonometry',
          'Unit 3: Calculus'
        ]
      },
      {
        name: 'Physics',
        units: [
          'Unit 1: Mechanics',
          'Unit 2: Waves and Oscillations',
          'Unit 3: Thermodynamics'
        ]
      },
      {
        name: 'Chemistry',
        units: [
          'Unit 1: Atomic Structure',
          'Unit 2: Chemical Bonding',
          'Unit 3: Organic Chemistry'
        ]
      }
    ];
    this.unitExpanded = Array(this.subjects.length).fill(false);
  }

  get filteredSubjects() {
    return this.subjects.filter(subject =>
      subject.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectSubject(subject: any): void {
    this.selectedSubject = subject;
    this.unitExpanded = Array(subject.units.length).fill(false);
  }

  toggleUnit(index: number): void {
    this.unitExpanded[index] = !this.unitExpanded[index];
  }

  goBack(): void {
    this.location.back();
  }
}
