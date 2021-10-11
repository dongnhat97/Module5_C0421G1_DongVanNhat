import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../Service/customer.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customer: any = {};
  id: number

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id= +paramMap.get("id")
      this.customerService.findById(this.id).subscribe(next=>{
        this.customer=next
      })
      }
    )
  }
  ngOnInit(): void {
  }
  cancelDelete() {
    this.router.navigateByUrl("/customer/list")
  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(next=>{
      alert("Đã xóa thành công")
      this.router.navigateByUrl('customer/list')
      window.location.reload()
    },error => console.log('Xóa không thành công, lỗi: ' + error))
  }
}
