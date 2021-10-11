import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../Customer/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../Customer/Service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../Customer/Service/customer-type.service";
import {checkAge} from "../../validate/checkAge";
import {RentType} from "../rent-type";
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  rentType: RentType[];
  contactForm: FormGroup;


  constructor(private serviceService: ServicesService, private router: Router, private rentTypeService: CustomerTypeService) {
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
    this.serviceService.findAll().subscribe(next=>{
      this.serviceService=next;
    })
  }
  // createCustomer() {
  //   if (this.contactForm.valid) {
  //     alert("Thêm mới thành công")
  //     this.customerService.createCustomer(this.contactForm.value).subscribe((next) => {
  //       this.router.navigateByUrl("/customer/list")
  //     })
  //
  //   }
  // }

}
