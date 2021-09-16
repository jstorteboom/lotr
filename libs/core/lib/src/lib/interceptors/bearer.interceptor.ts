import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserContextService } from '@lens/core/lib';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {

    constructor(private userContex: UserContextService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.userContex.apiKey) {
            req = req.clone({ headers: req.headers.set('Authorization', `bearer ${this.userContex.apiKey}`)});
        }   
        
        return next.handle(req);
    }
}