import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = "http://localhost:8080/car/api";

  constructor(private httpClient: HttpClient) {

  }

  findAll(): Observable<Car[] | any> {
    return this.httpClient.get(this.url);
  }

  createCustomer(customer: Car): Observable<any> {
    return this.httpClient.post(this.url+'/create', customer);
  }

  findById(id: number): Observable<Car | any> {
    return this.httpClient.get(this.url + "/" + id);
  }

  edit(id: number, customer: Car): Observable<Car | any> {
    return this.httpClient.put(this.url + "/" + id, customer)
  }

  delete(id: number): Observable<Car | any> {
    return this.httpClient.delete(this.url + "/" + id)
  }
}
