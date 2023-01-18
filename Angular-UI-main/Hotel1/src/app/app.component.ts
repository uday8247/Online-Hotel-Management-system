import { Component, DoCheck } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isLoggedIn = sessionStorage.getItem('username');
  ngDoCheck() {
    this.isLoggedIn = sessionStorage.getItem('username');
  }



  title = 'ANGULAR-FRONTEND';

}