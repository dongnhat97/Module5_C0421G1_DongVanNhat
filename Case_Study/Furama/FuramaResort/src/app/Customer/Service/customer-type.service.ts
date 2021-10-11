import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
 private customerTypeUrl="http://localhost:3000/customerType";
  constructor(private httpClient: HttpClient) {

  }
  finAll() : Observable<CustomerType[] |any> {

    console.log(this.httpClient.get(this.customerTypeUrl))
    return this.httpClient.get(this.customerTypeUrl)
  }
}
