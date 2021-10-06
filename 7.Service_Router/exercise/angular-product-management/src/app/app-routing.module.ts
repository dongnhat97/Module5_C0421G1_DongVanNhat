import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DictionayPageComponent} from "./dictionay-page/dictionay-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";

const routes: Routes = [
  {
    path: 'dictionary_page', component: DictionayPageComponent
  },
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'dictionary_detail/:id', component: DictionaryDetailComponent
  },
  {
    path: 'product/edit/:id', component: ProductEditComponent
  }
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
