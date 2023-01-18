import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {

  name = 'Angular 5';
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  guest: Guest = new Guest();
  constructor(private guestService: GuestService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToMakeReservation() {
    this.router.navigate(['/make-reservation']);
  }

  saveGuest() {
    console.log(this.guest)
    this.guestService.createGuest(this.guest).subscribe(data => {
      console.log(data);
      this.goToMakeReservation();
    },
      error => console.log(error));
  }

  goToGuestList() {
    this.router.navigate(['/guests']);
  }

  onSubmit() {
    console.log(this.guest);
    this.saveGuest();
  }
}