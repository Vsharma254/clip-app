import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as model from "./user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class UserService {
  url = "http://localhost:3000/api/";
  constructor(private http: HttpClient) {}
  getUserList(): Observable<model.User[]> {
    return this.http.get(this.url + "users").pipe(
      map(rep => {
        const response: any = rep || {};
        if (response.status) {
          throw {};
        } else {
          return <model.User[]>rep;
        }
      })
    );
  }
}
