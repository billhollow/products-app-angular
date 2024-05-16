import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    readonly authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized response, handle accordingly
          this.handleUnauthorizedError();
          return throwError(() => error);
        }
        return throwError(() => error);
      })
    );
  }

  handleUnauthorizedError() {

    this.authService.handleLogoutSuccess();
    Swal.fire({
      icon: 'error',
      title: 'Acceso no autorizado',
      // text: error['error']['message'],
    });
    this.router.navigate(['/login']);

  }
}
