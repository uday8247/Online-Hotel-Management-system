import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL = "http://localhost:8080/room_management_service/api/room/rooms";

  constructor(private httpClient: HttpClient) { }

  getRoomsList(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${this.baseURL}`);
  }

  createRoom(room: Room): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, room);
  }

  getRoomById(roomno: string): Observable<Room> {
    return this.httpClient.get<Room>(`${this.baseURL}/${roomno}`);
  }

  updateRoom(roomno: string, room: Room): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`, room);
  }

  deleteRoom(roomno: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${roomno}`);
  }
}
