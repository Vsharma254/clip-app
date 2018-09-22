import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserListComponent } from "./user-list/user-list.component";
const routes: Routes = [
  { path: "add-user", component: AddUserComponent },
  {
    path: "contact",
    loadChildren: "./contact/contact.module#ContactModule"
  },
  { path: "user-list", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
