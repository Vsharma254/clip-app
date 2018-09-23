import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { HttpService } from "./service/service";
import { MockBackend } from "./utility/http-intercepter/mock-backend";
import { HttpIntercepterModule } from "./utility/http-intercepter/http-intercepter.module";
import { MockRequest } from "./utility/http-intercepter/mock-request";
import { StoreModule, META_REDUCERS } from "@ngrx/store";
import { reducers as reducer, metaReducers } from "./store/root/root.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserService, UserEffect, reducer as userReducer } from "./store/user";

@NgModule({
  declarations: [AppComponent, AddUserComponent, UserListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpIntercepterModule,
    StoreModule.forRoot(reducer),  
    StoreModule.forFeature("user", userReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffect])
  ],
  providers: [
    HttpService,
    MockBackend,
    MockRequest,
    {
      provide: META_REDUCERS,
      useValue: metaReducers
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
