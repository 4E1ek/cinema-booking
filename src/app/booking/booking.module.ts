import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { BookingListComponent } from '../booking-list/booking-list.component';



@NgModule({
  declarations: [
    BookingFormComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
