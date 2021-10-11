import { Component, OnInit } from '@angular/core';
import {Customer} from "../../Customer/customer";
import {CustomerService} from "../../Customer/Service/customer.service";
import {Employee} from "../employee";
import {EmployeeServiceService} from "../service/employee-service.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];
  p: number =1;
  employeeName: any;

  constructor(private employeeService: EmployeeServiceService) {


  }

  ngOnInit(): void {
    this.employeeService.findAll().subscribe(next=>{
      this.employees=next;
    },error => {

    },()=>{})
  }



  Search() {
    if (this.employeeName=="") {
      this.ngOnInit()
    }else { this.employees=this.employees.filter(rest=>{
      return rest.employeeName.toLocaleLowerCase().includes(this.employeeName.toLocaleLowerCase())
    })

    }
  }
  key: string = 'id';
  reverse: boolean=false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  // showDetail(item: Customer) {
  //   this.e=item;
  // }

}
