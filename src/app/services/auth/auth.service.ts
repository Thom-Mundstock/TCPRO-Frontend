import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Auth } from './auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private readonly USER_KEY = 'user_auth';

  private setUserLocalStorage(auth: Auth): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(auth));
  }

  private getUserLocalStorage(): Auth | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  public login(username: string, password: string): Observable<Auth> {
    return this.http
      .post<Auth>(
        'http://localhost:8000/auth', //TODO: Adicione a URL do backend
        {},
        {
          headers: {
            Authorization: 'Basic ' + btoa(username + ':' + password),
          },
        }
      )
      .pipe(
        tap((auth: Auth) => {
          if (auth.accessToken) {
            this.setUserLocalStorage(auth);
            return auth;
          }
          throw new Error('Usuário ou senha inválidos');
        }),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );
  }
  public logout(): void {
    this.removeUserFromLocalStorage();
  }
  public redirect(): void {
    this.router.navigate(['/login']); // TODO: Verificar se essa vai ser a rota de login
  }
  get user(): Auth | null {
    return this.getUserLocalStorage() ?? null;
  }
  get token(): string | null {
    return this.user?.accessToken ?? null;
  }
  get isAuthenticated(): boolean {
    return !!this.user;
  }
}
