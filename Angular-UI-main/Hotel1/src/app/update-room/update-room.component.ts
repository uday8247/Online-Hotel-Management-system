import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: string;
  room: Room = new Room();
  constructor(private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['roomno'];

    console.log(this.id);

    console

    this.roomService.getRoomById(this.id).subscribe(data => {
      this.room = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.roomService.updateRoom(this.id, this.room).subscribe(data => {
      this.goToRoomList();
    }
      , error => this.goToRoomList());
  }

  goToRoomList() {
    this.router.navigate(['/rooms']);
  }
}
