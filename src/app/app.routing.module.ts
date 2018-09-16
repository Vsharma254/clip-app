import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
const routes: Routes = [
  { path: "add-user", component: AddUserComponent },
  {
    path: "contact",
    loadChildren: "./contact/contact.module#ContactModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
