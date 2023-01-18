import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation'
import { ReservationService } from '../reservation.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[];

  constructor(private reservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('username')) {
      this.getReservations();
      return;
    }
    this.router.navigate(['/login'])
  }

  private getReservations() {
    this.reservationService.getReservationsList().subscribe(data => {
      console.log(data)
      this.reservations = data;
    });
  }

  ReservationDetails(roomno: string) {
    this.router.navigate(['reservation-details', roomno]);
  }
  updateBookings(roomno: string) {
    this.router.navigate(['update-bookings', roomno]);
  }

  deleteReservation(roomno: string) {
    this.reservationService.deleteReservation(roomno).subscribe(data => {
      console.log(data);
      this.getReservations();
    })
  }
}
