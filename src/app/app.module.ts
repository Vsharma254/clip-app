import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { AppRoutingModule } from "./app.routing.module";
import { HttpService } from "./service/service";
@NgModule({
  declarations: [AppComponent, AddUserComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
