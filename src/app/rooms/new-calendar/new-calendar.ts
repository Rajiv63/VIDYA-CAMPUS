import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-new-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './new-calendar.html',
  styleUrls: ['./new-calendar.scss']
})
export class NewCalendar {
  calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    events: JSON.parse(localStorage.getItem('markedDates') || '[]'),
    dateClick: this.handleDateClick.bind(this)
  };

  handleDateClick(info: any) {
    const title = prompt('Enter title for this date:', 'Marked Day');
    if (title) {
      const newEvent = {
        title,
        date: info.dateStr
      };

      const existing = JSON.parse(localStorage.getItem('markedDates') || '[]');
      existing.push(newEvent);
      localStorage.setItem('markedDates', JSON.stringify(existing));

      this.calendarOptions.events = [...existing]; // Refresh events
    }
  }
}
