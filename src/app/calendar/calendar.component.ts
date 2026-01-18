import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter, CalendarView } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { addHours, startOfDay } from 'date-fns';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calendar',
  imports: [ CommonModule,
    RouterModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatSnackBarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  timeSlots = [
    { label: '9:00 AM', date: addHours(startOfDay(new Date()), 9) },
    { label: '10:00 AM', date: addHours(startOfDay(new Date()), 10) },
    { label: '11:00 AM', date: addHours(startOfDay(new Date()), 11) },
    { label: '1:00 PM', date: addHours(startOfDay(new Date()), 13) },
    { label: '2:00 PM', date: addHours(startOfDay(new Date()), 14) },
    { label: '3:00 PM', date: addHours(startOfDay(new Date()), 15) },
  ];

  constructor(private snackBar: MatSnackBar) {}

  bookTime(label: string) {
    // Here, you could call a backend service to save the booking
    this.snackBar.open(`Success! You booked ${label}`, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['booking-success']
    });
  }

}
