import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../../Customer/customer-type";
import {Position} from "../position";

@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {

  private positionUrl="http://localhost:3000/positions";
  constructor(private httpClient: HttpClient) {

  }
  finAll() : Observable<Position[] |any> {
    return this.httpClient.get(this.positionUrl)
  }
}
