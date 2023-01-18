import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { UpdateBookingsComponent } from './update-bookings/update-bookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlphaDirective } from './alpha.directive';
import { AccordionComponent } from './accordion/accordion.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    GuestListComponent,
    CreateGuestComponent,
    UpdateGuestComponent,
    GuestDetailsComponent,
    CreateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    MakeReservationComponent,
    ReservationListComponent,
    ReservationDetailsComponent,
    PaymentGatewayComponent,
    UpdateRoomComponent,
    UpdateBookingsComponent,
    AlphaDirective,
    AccordionComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
