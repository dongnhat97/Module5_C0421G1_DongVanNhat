import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../Service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
   customers: Customer[];
   p: number =1;
   customerName: any;
   customerParent: Customer;
  constructor(private customerService: CustomerService) {


  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(next=>{
      this.customers=next;
    },error => {

    },()=>{})
  }



  Search() {
    if (this.customerName=="") {
      this.ngOnInit()
    }else { this.customers=this.customers.filter(rest=>{
    return rest.customerName.toLocaleLowerCase().includes(this.customerName.toLocaleLowerCase())
    })

    }
  }
  key: string = 'id';
  reverse: boolean=false;
  sort(key) {
     this.key = key;
     this.reverse = !this.reverse
  }

  showDetail(item: Customer) {
   this.customerParent=item;
  }
}
