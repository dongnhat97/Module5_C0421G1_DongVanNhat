import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../Customer/customer";
import {IService} from "./IService";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url_Service = "http://localhost:3000/services";

  constructor(private httpClient: HttpClient) {

  }
  findAll(): Observable<IService[]|any> {
    return this.httpClient.get(this.url_Service);
  }
  createCustomer(service: IService):Observable<any> {
    return this.httpClient.post(this.url_Service, service);
  }
  findById(id: number):Observable<Customer|any> {
    return this.httpClient.get(this.url_Service+"/"+id);
  }
  editCustomer(id: number,customer: IService):Observable<IService|any> {
    return this.httpClient.put(this.url_Service+"/"+id,customer)
  }
  deleteCustomer(id: number): Observable<IService|any> {
    return this.httpClient.delete(this.url_Service+"/"+id)
  }


}
