import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url_customer = "http://localhost:3000/customers";

  constructor(private httpClient: HttpClient) {

  }
  findAll(): Observable<Customer[]|any> {
    return this.httpClient.get(this.url_customer);
  }
  createCustomer(customer: Customer):Observable<any> {
    return this.httpClient.post(this.url_customer, customer);
  }
  findById(id: number):Observable<Customer|any> {
    return this.httpClient.get(this.url_customer+"/"+id);
  }
  editCustomer(id: number,customer: Customer):Observable<Customer|any> {
    return this.httpClient.put(this.url_customer+"/"+id,customer)
  }
  deleteCustomer(id: number): Observable<Customer|any> {
    return this.httpClient.delete(this.url_customer+"/"+id)
  }
}
