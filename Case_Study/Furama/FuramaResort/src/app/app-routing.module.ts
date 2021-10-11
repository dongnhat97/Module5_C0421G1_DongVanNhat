import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCustomerComponent} from "./Customer/list-customer/list-customer.component";
import {UpdateCustomerComponent} from "./Customer/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./Customer/delete-customer/delete-customer.component";
import {CreateCustomerComponent} from "./Customer/create-customer/create-customer.component";
import {DeleteEmployeeComponent} from "./Employee/delete-employee/delete-employee.component";
import {UpdateEmployeeComponent} from "./Employee/update-employee/update-employee.component";
import {ListEmployeeComponent} from "./Employee/list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./Employee/create-employee/create-employee.component";
import {HomeComponent} from "./Home/home/home.component";
import {ListServiceComponent} from "./service/list-service/list-service.component";
import {CreateServiceComponent} from "./service/create-service/create-service.component";

const routes: Routes = [
  {path:"customer/list",component: ListCustomerComponent,
    children:[{path:"delete/:id",component: DeleteCustomerComponent}]},
  {path:"",component: HomeComponent},

  {path:"customer/update/:id",component: UpdateCustomerComponent},
  {path:"customer/create",component: CreateCustomerComponent},

  {path:"employee/list",component: ListEmployeeComponent,
    children:[{path:"delete/:id",component: DeleteEmployeeComponent}]},
  {path:"employee/update/:id",component: UpdateEmployeeComponent},
  {path:"employee/create",component: CreateEmployeeComponent},

  {path:"service/list",component: ListServiceComponent},
  {path:"service/create",component: CreateServiceComponent},




]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Module con.
    RouterModule.forRoot(routes)
    //ForChild và ForRoot khác nhau như thế nào?
  ]
})
export class AppRoutingModule { }
