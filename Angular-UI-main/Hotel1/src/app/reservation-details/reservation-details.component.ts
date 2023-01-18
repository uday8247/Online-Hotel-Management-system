import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  id: string
  reservation: Reservation
  constructor(private route: ActivatedRoute, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['roomno'];

    this.reservation = new Reservation();
    this.reservationService.getReservationById(this.id).subscribe(data => {
      this.reservation = data;
    });
  }

}
