import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const BASE_URL: string = 'http://54.243.29.48:8080'
    var token = localStorage.getItem('token');
    const apiReq = req.clone({
      url: `${BASE_URL}/${req.url}`,
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    })

    return next.handle(apiReq);
  }
}
