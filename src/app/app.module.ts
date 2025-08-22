import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { App } from './app'; // 👈 root app component
import { LoginNew } from './login-new/login-new';
import { SignupNew } from './signup-new/signup-new';
import { NewDashboard } from './signup-new/new-dashboard/new-dashboard';
import { studentsdashboard } from './components/pages/dashboard/studentsdashboard';
import { NewCalendar } from './rooms/new-calendar/new-calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   interactionPlugin
// ]);

@NgModule({
  declarations: [], // ⛔ Don't add standalone components here
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule,

    // ✅ Use standalone components here
    App,
    LoginNew,
    SignupNew,
    NewDashboard,
    studentsdashboard,
    NewCalendar
  ],
  bootstrap: [App] // ✅ Bootstrapping main App component
})
export class AppModule {}
