import {Component, OnInit} from '@angular/core';
import {Car} from "../car";
import {CarType} from "../car-type";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarTypeService} from "../service/car-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CarService} from "../service/car.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  car: Car | any;
  carTypes: CarType[];
  contactForm = new FormGroup({

    garage: new FormControl("", [Validators.required]),
    licensePlates: new FormControl("", [Validators.required]),
    carType: new FormControl(),
    startAddress: new FormControl("", [Validators.required]),
    endAddress: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
    email: new FormControl("", [Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
    startHour: new FormControl("", [Validators.required]),

  })
  id: number

  constructor(private carTypeService: CarTypeService,
              private carService: CarService,
              private router: Router) {



  }

  ngOnInit(): void {
    this.finAllCustomerType()
  }

  edit() {
    if (this.contactForm.valid) {
      this.car = JSON.parse(this.contactForm.value);
      console.log(this.car)
      this.carService.createCustomer( this.car).subscribe((next) => {
        this.router.navigateByUrl("/")
      })
    }

  }

  finAllCustomerType() {
    this.carTypeService.finAll().subscribe(next => {
      this.carTypes = next;
    })
  }

  // compareFn(c1: any, c2: any): boolean {
  //   return c1 && c2 ? c1.id === c2.id : c1 === c2;
  // }

  checkNow(abstractControl: AbstractControl): any {
    const date = abstractControl.value;
    const now = new Date().toJSON().slice(0, 10).split('-');
    console.log(now);
    console.log(date);

    return now <= date.toString().split('-') ? null : {errorCodeTime: true};
  }

}
