import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
   customers: Customer[];
  constructor() {
    this.customers=[
    {customerId: 1,customerName: "Đồng Văn Nhật",customerType: "pro",customerBirthday: "29/08/1997",customerCar: "273821123",customerPhone:"0982642365",customerEmail: "Nhat@gmail.com",customerAddress:"Hà Tĩnh"},
    {customerId: 1,customerName: "Văn Thanh Hà",customerType: "vip",customerBirthday: "11/11/1996",customerCar: "273827885",customerPhone:"0982231122",customerEmail: "Ha@gmail.com",customerAddress:"Đà Nẵng "},
    {customerId: 1,customerName: "Lê Cu Dẹp ",customerType: "pro",customerBirthday: "11/12/2000",customerCar: "273823322",customerPhone:"0882644525",customerEmail: "Dep@gmail.com",customerAddress:"Quảng Nôm"},
    ]
  }

  ngOnInit(): void {
  }

}
