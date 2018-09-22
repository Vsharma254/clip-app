import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
} from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { Observable } from "rxjs";
import { MockRequest } from "./mock-request";

@Injectable()
export class MockBackend implements HttpInterceptor {
  constructor(private mockReq: MockRequest) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {    
    if (environment.isMockBackend) {
      return (
        this.mockReq.mock(req.url, req.method, req) 
      ); //  if more then
    } else {
      return next.handle(req);
    }
  }  
}
