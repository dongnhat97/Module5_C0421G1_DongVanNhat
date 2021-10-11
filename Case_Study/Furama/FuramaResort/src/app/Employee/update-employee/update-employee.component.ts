import { Component, OnInit } from '@angular/core';
import {Position} from "../position";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeServiceService} from "../service/employee-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PositionServiceService} from "../service/position-service.service";
import {checkAge} from "../../validate/checkAge";
import {Customer} from "../../Customer/customer";
import {CustomerType} from "../../Customer/customer-type";
import {CustomerTypeService} from "../../Customer/Service/customer-type.service";
import {CustomerService} from "../../Customer/Service/customer.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee | any;
  positions: Position[];
  contactForm = new FormGroup({
    employeeName: new FormControl("", [Validators.required]),
    employeeSalary: new FormControl("", [Validators.required]),
    employeePosition: new FormControl(""),
    employeeBirthday: new FormControl("", [Validators.required,checkAge]),
    employeeCard: new FormControl("", [Validators.pattern("^\\d{9}|\\d{12}$")]),
    employeePhone: new FormControl("", [Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
    employeeEmail: new FormControl("", [Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
    employeeAddress: new FormControl("", [Validators.required]),

  });
  id: number

  constructor(private employeeService: EmployeeServiceService, private activatedRoute: ActivatedRoute, private positionService: PositionServiceService, private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get("id");
        employeeService.findById(this.id).subscribe(next => {
          this.employee = next
          this.contactForm.patchValue(this.employee)
        })
      }
    )
  }

  ngOnInit(): void {
    this.finAllPosition()
  }

  editEmployee() {
    if (this.contactForm.valid) {
      this.employeeService.editEmployee(this.id, this.contactForm.value).subscribe((next) => {
        this.router.navigateByUrl("/employee/list")
      })
    }

  }

  finAllPosition() {
    this.positionService.finAll().subscribe(next=>{
      this.positions=next;
    })
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
