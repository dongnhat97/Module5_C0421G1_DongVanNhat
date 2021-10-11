import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../Customer/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../Customer/Service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../Customer/Service/customer-type.service";
import {EmployeeServiceService} from "../service/employee-service.service";
import {PositionServiceService} from "../service/position-service.service";
import {Position} from "../position";
import {checkAge} from "../../validate/checkAge";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  positions: Position[];
  contactForm: FormGroup;


  constructor(private employeeService: EmployeeServiceService, private router: Router, private positionService: PositionServiceService) {
    this.finAllCustomerType()
    this.contactForm = new FormGroup({
      employeeName: new FormControl("", [Validators.required]),
      employeePosition: new FormControl(),
      employeeBirthday: new FormControl("", [Validators.required,checkAge]),
      employeeCard: new FormControl("", [Validators.pattern("^\\d{9}|\\d{12}$")]),
      employeeSalary: new FormControl("", [Validators.min(1)]),
      employeePhone: new FormControl("", [Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
      employeeEmail: new FormControl("", [Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
      employeeAddress: new FormControl("", [Validators.required]),

    })


  }

  ngOnInit(): void {

  }

  finAllCustomerType() {
    this.positionService.finAll().subscribe(next=>{
      this.positions=next;
    })
  }
  createCustomer() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
      this.employeeService.createEmployee(this.contactForm.value).subscribe((next) => {
        this.router.navigateByUrl("/")
      })

    }
  }

}
