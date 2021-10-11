import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import validate = WebAssembly.validate;
import {Customer} from "../customer";
import {CustomerService} from "../Service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../Service/customer-type.service";
import {CustomerType} from "../customer-type";
import {checkAge} from "../../validate/checkAge";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerTypes: CustomerType[];
  contactForm: FormGroup;


  constructor(private customerService: CustomerService, private router: Router, private customerTypeService: CustomerTypeService) {
    this.finAllCustomerType()
    this.contactForm = new FormGroup({
      customerName: new FormControl("", [Validators.required]),
      customerCode: new FormControl("", [Validators.pattern("^KH-\\d{4}$")]),
      customerType: new FormControl(),
      customerBirthday: new FormControl("", [Validators.required,checkAge]),
      customerCar: new FormControl("", [Validators.pattern("^\\d{9}|\\d{12}$")]),
      customerPhone: new FormControl("", [Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
      customerEmail: new FormControl("", [Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
      customerAddress: new FormControl("", [Validators.required]),

    })


  }

  ngOnInit(): void {

  }

  finAllCustomerType() {
    this.customerTypeService.finAll().subscribe(next=>{
      this.customerTypes=next;
    })
  }
  createCustomer() {
    if (this.contactForm.valid) {
      alert("Thêm mới thành công")
      this.customerService.createCustomer(this.contactForm.value).subscribe((next) => {
        this.router.navigateByUrl("/customer/list")
      })

    }
  }
}
