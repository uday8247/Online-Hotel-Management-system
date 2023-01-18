import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bookings',
  templateUrl: './update-bookings.component.html',
  styleUrls: ['./update-bookings.component.css']
})
export class UpdateBookingsComponent implements OnInit {

  id: string;
  reservation: Reservation = new Reservation
  constructor(private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['roomno'];

    console.log(this.id);

    this.reservationService.getReservationById(this.id).subscribe(data => {
      this.reservation = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.reservationService.updateBookings(this.id, this.reservation).subscribe(data => {
      this.goToReservationList();
    }
      , error => this.goToReservationList());
  }

  goToReservationList() {
    this.router.navigate(['/reservations']);
  }
}
