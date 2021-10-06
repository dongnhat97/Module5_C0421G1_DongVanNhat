import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {TimelinesComponent} from "./timelines/timelines.component";

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent


  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
