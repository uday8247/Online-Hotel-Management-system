import { Component, OnInit } from '@angular/core';
import { Room } from '../room'
import { RoomService } from '../room.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('username')) {
      this.getRooms();
      return;
    }
    this.router.navigate(['/login'])
  }

  private getRooms() {
    this.roomService.getRoomsList().subscribe(data => {
      this.rooms = data;
    });
  }

  roomDetails(roomno: string) {
    this.router.navigate(['room-details', roomno]);
  }

  updateRoom(roomno: string) {
    this.router.navigate(['update-room', roomno]);
  }

  deleteRoom(roomno: string) {
    this.roomService.deleteRoom(roomno).subscribe(data => {
      console.log(data);
      this.getRooms();
    })
  }
}
