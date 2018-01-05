import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent {

  public employees: Employee[];
  public newEmployee: string;

  constructor(
    private employeesService: EmployeesService
  ) {
    this.getEmployees();
  }

  public create(name) {
    this.employeesService.createEmployee(name).subscribe( data => {
      this.getEmployees();
      this.newEmployee = '';
    });
  }

  public update(employee) {
    this.employeesService.updateEmployeeName(employee).subscribe( data => {
      employee = data;
    });
  }

  public delete(employee) {
    this.employeesService.deleteEmployee(employee.id).subscribe( data => {
      this.getEmployees();
    });
  }

  private getEmployees() {
    return this.employeesService.getEmployees().subscribe( (data: Employee[]) => {
      this.employees = data;
    });
  }
}

interface Employee {
  id: number;
  name: string;
}
