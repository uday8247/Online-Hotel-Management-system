import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: string
  room: Room
  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['roomno'];

    this.room = new Room();
    this.roomService.getRoomById(this.id).subscribe(data => {
      this.room = data;
    });
  }

}
