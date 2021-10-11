import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../Customer/customer";

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
   @Input("customerChild") customerDetail: Customer| any
  constructor() { }

  ngOnInit(): void {
  }

}
