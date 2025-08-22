import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginNew } from './login-new/login-new';
import { FormsModule } from '@angular/forms';
import { SignupNew } from './signup-new/signup-new';
import { NewDashboard } from './signup-new/new-dashboard/new-dashboard';
import { studentsdashboard } from './components/pages/dashboard/studentsdashboard';
import { Rooms } from './rooms/rooms';
import { NewCalendar } from './rooms/new-calendar/new-calendar';
import { Syllabus } from './components/syllabus/syllabus';

export const routes: Routes = [
  { path: 'login', component: LoginNew },
  { path: 'signup', component: SignupNew },
  { path: 'new-dashboard', component: NewDashboard },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'studentsdashboard', component: studentsdashboard },
   { path: 'syllabus', component: Syllabus },
  {
    path: 'dashboard/room-details/:branch/:year',
    component: Rooms,
  },
  {
    path: 'dashboard/labs/:branch/:year',
    component: Rooms,
  },
  {
    path: 'dashboard/calendar/:branch/:year',
    component: NewCalendar,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
