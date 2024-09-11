import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(): boolean {
    const { accessToken, authenticated } = this.authService.user ?? {
      accessToken: null,
      authenticated: false,
    };

    if (!authenticated || !accessToken) {
      this.authService.logout();
      this.authService.redirect();
      return false;
    }
    return true;
  }
}
