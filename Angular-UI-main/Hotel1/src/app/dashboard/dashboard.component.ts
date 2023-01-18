import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  opened = false;
  showToggle: string;
  openSidenav: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}