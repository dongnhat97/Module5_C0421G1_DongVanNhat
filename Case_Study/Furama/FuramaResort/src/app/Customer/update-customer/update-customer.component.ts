import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../Service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../customer";
import {CustomerTypeService} from "../Service/customer-type.service";
import {CustomerType} from "../customer-type";
import {checkAge} from "../../validate/checkAge";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer: Customer | any;
  customerTypes: CustomerType[];
  contactForm = new FormGroup({
    customerName: new FormControl("", [Validators.required]),
    customerCode: new FormControl("", [Validators.pattern("^KH-\\d{4}$")]),
    customerType: new FormControl(""),
    customerBirthday: new FormControl("", [Validators.required,checkAge]),
    customerCar: new FormControl("", [Validators.pattern("^\\d{9}|\\d{12}$")]),
    customerPhone: new FormControl("", [Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
    customerEmail: new FormControl("", [Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
    customerAddress: new FormControl("", [Validators.required]),

  });
  id: number

  constructor(private customerTypeService: CustomerTypeService, private activatedRoute: ActivatedRoute, private customerService: CustomerService, private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get("id");
        customerService.findById(this.id).subscribe(next => {
          this.customer = next
          this.contactForm.patchValue(this.customer)
        })
      }
    )
  }

  ngOnInit(): void {
    this.finAllCustomerType()
  }

  editCustomer() {
    if (this.contactForm.valid) {
      this.customerService.editCustomer(this.id, this.contactForm.value).subscribe((next) => {
        this.router.navigateByUrl("/customer/list")
      })
    }

  }

  finAllCustomerType() {
    this.customerTypeService.finAll().subscribe(next => {
      this.customerTypes = next;
    })
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
