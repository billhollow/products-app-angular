import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Retrieve token from storage
    const token = localStorage.getItem('token');

    // Clone the request and add token to headers
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    // Pass on the cloned request with the token header
    return next.handle(authReq);
  }
}
