import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './Employee/view-employee/view-employee.component';

import { ListCustomerComponent } from './Customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './Customer/delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { DeleteEmployeeComponent } from './Employee/delete-employee/delete-employee.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import { HomeComponent } from './Home/home/home.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,

    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    ViewCustomerComponent,
    DetailCustomerComponent,
    DeleteEmployeeComponent,
    HomeComponent,
    CreateServiceComponent,
    ListServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    NoopAnimationsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
