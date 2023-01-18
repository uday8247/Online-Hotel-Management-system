import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('username')) {
      this.getEmployees();
      return;
    }
    this.router.navigate(['/login'])
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      console.log(data)
      this.employees = data;
    });
  }

  employeeDetails(emailid: string) {
    this.router.navigate(['employee-details', emailid]);
  }

  updateEmployee(emailid: string) {
    this.router.navigate(['update-employee', emailid]);
  }

  deleteEmployee(emailid: string) {
    this.employeeService.deleteEmployee(emailid).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  onDeleteNotification(id: number) {
    const i = this.employees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.employees.splice(i, 1);
    }
  }
}