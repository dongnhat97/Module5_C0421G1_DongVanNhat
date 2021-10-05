import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
      password: new FormControl("",[Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }

  onLogin() {

  }
}
