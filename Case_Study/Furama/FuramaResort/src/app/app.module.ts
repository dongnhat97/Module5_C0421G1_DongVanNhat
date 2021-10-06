import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './Contract/create/create.component';
import { UpdateComponent } from './Contract/update/update.component';
import { DeleteComponent } from './Contract/delete/delete.component';
import { ViewComponent } from './Contract/view/view.component';
import { ListComponent } from './Contract/list/list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './Employee/view-employee/view-employee.component';
import { ListServiceComponent } from './Service/list-service/list-service.component';
import { UpdateServiceComponent } from './Service/update-service/update-service.component';
import { CreateServiceComponent } from './Service/create-service/create-service.component';
import { DeleteServiceComponent } from './Service/delete-service/delete-service.component';
import { ListCustomerComponent } from './Customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './Customer/delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent,
    ListComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    ListServiceComponent,
    UpdateServiceComponent,
    CreateServiceComponent,
    DeleteServiceComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
