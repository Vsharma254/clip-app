import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackend } from './mock-backend';
@NgModule(
    {
        imports: [],
        declarations: [],
        providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: MockBackend,
            multi: true
        }]
    }
)
export class HttpIntercepterModule {

}