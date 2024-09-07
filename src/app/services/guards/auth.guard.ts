import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
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
