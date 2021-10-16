import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarType} from "../car-type";

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  private url = "http://localhost:8080/carType/api";

  constructor(private httpClient: HttpClient) {

  }

  finAll(): Observable<CarType[] | any> {

    return this.httpClient.get(this.url)
  }
}
