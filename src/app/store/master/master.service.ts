import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as model from "./master.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class MasterService {
  url = "http://localhost:3000/api/";
  constructor(private http: HttpClient) {}
  getCategoryList(): Observable<model.Category[]> {
    return this.http.get(this.url + "categories").pipe(
      map(rep => {
        const response: any = rep || {};
        if (response.status) {
          throw {};
        } else {
          return <model.Category[]>rep;
        }
      })
    );
  }
  saveCategory(category: model.Category): Observable<model.Category[]> {
    return this.http.post(this.url + "addcategory", category).pipe(
      map(rep => {
        const response: any = rep || {};
        if (response.status) {
          throw {};
        } else {
          return <model.Category[]>rep;
        }
      })
    );
  }
  deleteCategory(category: model.Category): Observable<model.Category[]> {
    return this.http.post(this.url + "deletecategory", category).pipe(
      map(rep => {
        const response: any = rep || {};
        if (response.status) {
          throw {};
        } else {
          return <model.Category[]>rep;
        }
      })
    );
  }
}
