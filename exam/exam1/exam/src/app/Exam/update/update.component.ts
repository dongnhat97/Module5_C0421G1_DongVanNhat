import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../car";
import {CarType} from "../car-type";
import {CarService} from "../service/car.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CarTypeService} from "../service/car-type.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  car: Car | any;
  carTypes: CarType[];
  contactForm = new FormGroup({

    garage: new FormControl("", [Validators.required]),
    licensePlate: new FormControl("", [Validators.required]),
    carType: new FormControl(),
    addressStart: new FormControl("", [Validators.required]),
    addressEnd: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.pattern("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$")]),
    email: new FormControl("", [Validators.pattern("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")]),
    startDay: new FormControl("", [Validators.required, this.checkNow]),

  })
  id: number

  constructor(private carTypeService: CarTypeService,
              private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get("id");
        carService.findById(this.id).subscribe(next => {
          this.car = next
          this.contactForm.patchValue(this.car)
        })
      }
    )
  }

  ngOnInit(): void {
    this.finAllCustomerType()
  }

  edit() {
    if (this.contactForm.valid) {
      this.carService.edit(this.id, this.contactForm.value).subscribe((next) => {
        this.router.navigateByUrl("/")
      })
    }

  }

  finAllCustomerType() {
    this.carTypeService.finAll().subscribe(next => {
      this.carTypes = next;
    })
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  checkNow(abstractControl: AbstractControl): any {
    const date = abstractControl.value;
    const now = new Date().toJSON().slice(0, 10).split('-');
    console.log(now);
    console.log(date);

    return now <= date.toString().split('-') ? null : {errorCodeTime: true};
  }

}
