import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest'
import { GuestService } from '../guest.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  guests: Guest[];

  constructor(private guestService: GuestService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('username')) {
      this.getGuests();
      return;
    }
    this.router.navigate(['/login'])
  }

  private getGuests() {
    this.guestService.getGuestList().subscribe(data => {
      console.log(data)
      this.guests = data;
    });
  }

  guestDetails(emailid: string) {
    this.router.navigate(['guest-details', emailid]);
  }

  updateGuest(emailid: string) {
    this.router.navigate(['update-guest', emailid]);
  }

  deleteGuest(emailid: string) {
    this.guestService.deleteGuest(emailid).subscribe(data => {
      console.log(data);
      this.getGuests();
    })
  }

  onDeleteNotification(id: number) {
    const i = this.guests.findIndex(e => e.id === id);
    if (i !== -1) {
      this.guests.splice(i, 1);
    }
  }
}