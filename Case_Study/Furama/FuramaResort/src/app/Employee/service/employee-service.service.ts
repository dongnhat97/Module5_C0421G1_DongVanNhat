import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../Customer/customer";
import {Employee} from "../employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url_employee = "http://localhost:3000/employees";

  constructor(private httpClient: HttpClient) {

  }
  findAll(): Observable<Employee[]|any> {
    return this.httpClient.get(this.url_employee);
  }
  createEmployee(employee: Employee):Observable<any> {
    return this.httpClient.post(this.url_employee, employee);
  }
  findById(id: number):Observable<Customer|any> {
    return this.httpClient.get(this.url_employee+"/"+id);
  }
  editEmployee(id: number,employee: Employee):Observable<Employee|any> {
    return this.httpClient.put(this.url_employee+"/"+id,employee)
  }
  deleteEmployee(id: number): Observable<Customer|any> {
    return this.httpClient.delete(this.url_employee+"/"+id)
  }
}
