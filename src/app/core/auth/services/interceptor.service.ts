import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor( 
    private readonly tokenService: TokenService,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Retrieve token from storage
    const token = this.tokenService.getToken();

    // Clone the request and add token to headers
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    // Pass on the cloned request with the token header
    return next.handle(authReq);
  }
}
