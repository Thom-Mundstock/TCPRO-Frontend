import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { catchError, Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const isLogin = req.url.includes('login');
    const token = this.authService.token;
    if (token) {
      const authRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (isLogin) {
        if (this.authService.isAuthenticated) {
          this.authService.logout();
        }

        return next.handle(req);
      }

      return next.handle(authRequest).pipe(
        tap((e) => {
          console.log(e);
          if (e instanceof HttpResponse) {
            const { headers } = e;
            if (headers.get('status') === '401') {
              this.authService.logout();
              this.authService.redirect();
            }
          }
        }),
        catchError((error) => {
          if (error.status === 401) {
            this.authService.logout();
            this.authService.redirect();
          }
          throw error;
        })
      );
    }
    return next.handle(req);
  }
}
