import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import validate = WebAssembly.validate;
import {Customer} from "../customer";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  @Output("createChild") customerChild : EventEmitter<Customer>

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      customerId: new FormControl(),
      customerName: new FormControl("",[Validators.required]),
      customerCode: new FormControl("",[Validators.pattern("^KH-\\d{4}$")]),
      customerType: new FormControl("",[Validators.required]),
      customerBirthday: new FormControl("",[Validators.pattern("^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}$")]),
      customerCar: new FormControl("",[Validators.pattern("^\\d{9}|\\d{12}$")]),
      customerPhone: new FormControl("",[Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
      customerEmail: new FormControl("",[Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
      customerAddress: new FormControl("",[Validators.required]),

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.customerChild.emit(this.contactForm.value)
  }
}
