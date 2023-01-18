import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = "http://localhost:8080/reservation_management_service/api/booking/rooms";

  constructor(private httpClient: HttpClient) { }

  getReservationsList(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseURL}`);
  }

  createReservation(reservation: Reservation): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, reservation);
  }

  updateBookings(roomno: string, reservation: Reservation): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`, reservation);
  }

  deleteReservation(roomno: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${roomno}`);
  }

  getReservationById(roomno: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.baseURL}/${roomno}`);
  }
}
