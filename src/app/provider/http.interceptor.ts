import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BASE_URL = environment.base_url;
    const token = localStorage.getItem('token');
    const isRequestCep = req.url.includes('viacep');

    const apiReq = req.clone({
      url: isRequestCep ? req.url : `${BASE_URL}/${req.url}`,
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(apiReq).pipe(
      tap({
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        },
      })
    );
  }
}
