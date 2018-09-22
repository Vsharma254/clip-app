import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, } from 'rxjs/operators';
@Injectable()
export class HttpService {
  title = 'cli-app';
  url = 'http://localhost:3000/api/';
  constructor(private http:HttpClient) {
  }
  getUserAllData(){
   return  this.http.get(this.url+'user/list');
  }
}
