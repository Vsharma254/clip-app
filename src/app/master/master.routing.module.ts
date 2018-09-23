import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MasterComponent } from "./master.component";
import { CategoryComponent } from "./category/category.component";
const routes: Routes = [
  {
    path: "",
    component: MasterComponent
  }
  ,
  {
    path: "",
    children: [
      {
        path: "category",
        component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
