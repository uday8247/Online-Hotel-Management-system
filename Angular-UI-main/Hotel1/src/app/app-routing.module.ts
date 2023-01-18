import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { LogoutComponent } from './logout/logout.component';

import { AuthGaurdService } from './service/auth-guard.service';

import { GuestListComponent } from './guest-list/guest-list.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';

import { RoomListComponent } from './room-list/room-list.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { UpdateRoomComponent } from './update-room/update-room.component';


import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { UpdateBookingsComponent } from './update-bookings/update-bookings.component';

import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';



import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'update-employee/:emailid', component: UpdateEmployeeComponent },
  { path: 'employee-details/:emailid', component: EmployeeDetailsComponent },
  { path: 'create-guest', component: CreateGuestComponent },
  { path: 'guests', component: GuestListComponent },
  { path: 'update-guest/:emailid', component: UpdateGuestComponent },
  { path: 'guest-details/:emailid', component: GuestDetailsComponent },
  { path: 'guest-list/:emailid', component: GuestListComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'room-details/:roomno', component: RoomDetailsComponent },
  { path: 'room-list/:roomno', component: RoomListComponent },
  { path: 'update-room/:roomno', component: UpdateRoomComponent },
  { path: 'make-reservation', component: MakeReservationComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'reservation-details/:roomno', component: ReservationDetailsComponent },
  { path: 'reservation-list/:roomno', component: ReservationListComponent },
  { path: 'update-bookings/:roomno', component: UpdateBookingsComponent },
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
