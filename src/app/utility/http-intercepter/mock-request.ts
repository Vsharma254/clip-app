import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import {UserList} from './stub';
@Injectable()
export class MockRequest {
    constructor() { }
    public mock(url: string, method: string, request: HttpRequest<any>): Observable<HttpEvent<any>> {
        if (url.match('api/users') && method === 'GET') {
            const requestContent = request.body;
            const responseContent = UserList;
            return new Observable(resp => {
                resp.next(new HttpResponse({
                    status: 200,
                    body: responseContent
                }));
                resp.complete();
            });
        }    
        return null;
    }
}