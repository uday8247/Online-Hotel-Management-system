import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private baseURL = "http://localhost:8080/guest_management_service/api/v1/guests";

  constructor(private httpClient: HttpClient) { }

  getGuestList(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(`${this.baseURL}`);
  }

  createGuest(guest: Guest): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, guest);
  }

  getGuestById(emailid: string): Observable<Guest> {
    return this.httpClient.get<Guest>(`${this.baseURL}/${emailid}`);
  }

  updateGuest(emailid: string, guest: Guest): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${emailid}`, guest);
  }

  deleteGuest(emailid: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${emailid}`);
  }
}

