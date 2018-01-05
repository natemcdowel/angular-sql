import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class EmployeesService {

  private endpoint = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient
  ) { }

  public getEmployees() {
    return this.http.get(
      this.endpoint + 'employees'
    );
  }

  public updateEmployeeName(employee) {
    return this.http.put(
      this.endpoint + 'employee/' + employee.id,
      {name: employee.name}
    );
  }

  public createEmployee(name) {
    return this.http.post(
      this.endpoint + 'employee/',
      {name: name}
    );
  }

  public deleteEmployee(id) {
    return this.http.delete(
      this.endpoint + 'employee/' + id
    );
  }
}
