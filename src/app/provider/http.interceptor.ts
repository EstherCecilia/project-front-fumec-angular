import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const BASE_URL = environment.base_url;
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
