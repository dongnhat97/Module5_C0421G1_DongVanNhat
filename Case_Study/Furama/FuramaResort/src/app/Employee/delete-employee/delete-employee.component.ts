import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../../Customer/Service/customer.service";
import {EmployeeServiceService} from "../service/employee-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employee: any = {};
  id: number

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeServiceService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
        this.id= +paramMap.get("id")
        this.employeeService.findById(this.id).subscribe(next=>{
          this.employee=next

        })
      }
    )
  }
  ngOnInit(): void {
  }
  cancelDelete() {
    this.router.navigateByUrl("/")
  }

  delete() {
    this.employeeService.deleteEmployee(this.id).subscribe(next=>{
      this.employeeService.deleteEmployee(this.id)
      this.router.navigateByUrl("/employee/list");
      window.location.reload()
    })
  }

}

