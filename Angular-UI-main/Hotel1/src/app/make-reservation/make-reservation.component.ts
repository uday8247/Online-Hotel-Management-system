import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {

  reservation: Reservation = new Reservation
  constructor(private reservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveReservation() {
    this.goToPaymentGateway();
    console.log(this.reservation)
    this.reservationService.createReservation(this.reservation).subscribe(data => {
      console.log(data);

    },
      error => console.log(error));
  }

  goToPaymentGateway() {
    this.router.navigate(['/payment-gateway']);
  }

  onSubmit() {
    console.log(this.reservation);
    this.saveReservation();
  }
}
