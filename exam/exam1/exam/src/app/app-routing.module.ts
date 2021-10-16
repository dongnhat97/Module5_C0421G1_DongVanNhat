import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./Exam/list/list.component";
import {UpdateComponent} from "./Exam/update/update.component";
import {DeleteComponent} from "./Exam/delete/delete.component";
import {CreateComponent} from "./Exam/create/create.component";


const routes: Routes = [
  {
    path: "", component: ListComponent,
    children: [{path: "delete/:id", component: DeleteComponent}]
  },
  {path: "update/:id", component: UpdateComponent},
  {
    path: "create", component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
