import { Component, OnInit } from '@angular/core';
import {Customer} from "../../Customer/customer";
import {CustomerService} from "../../Customer/Service/customer.service";
import {IService} from "../IService";
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  services: IService[];
  p: number =1;
  serviceName: any;

  constructor(private serviceServices: ServicesService) {


  }

  ngOnInit(): void {
    this.serviceServices.findAll().subscribe(next=>{
      this.services=next;
    },error => {

    },()=>{})
  }



  Search() {
    if (this.serviceName=="") {
      this.ngOnInit()
    }else { this.services=this.services.filter(rest=>{
      return rest.serviceName.toLocaleLowerCase().includes(this.serviceName.toLocaleLowerCase())
    })

    }
  }
  key: string = 'id';
  reverse: boolean=false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }


}
