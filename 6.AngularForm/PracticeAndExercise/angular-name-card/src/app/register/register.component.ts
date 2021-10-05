import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {comparePassword} from './gte.validator'
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryList=[
    'Việt Nam',
    'Hà Lan',
     'Usa'
  ]
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),

      pwGroup: new FormGroup({
        password: new FormControl(),
        confirmPassword: new FormControl()
      },[comparePassword])
      ,
      country: new FormControl(),
      age: new FormControl("",[Validators.min(18),Validators.max(80)]),
      gender: new FormControl(),
      phone : new FormControl(Validators.pattern("regex =/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/"))
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }

  getPassword() {
    return this.contactForm.get('pwGroup')
  }
}
