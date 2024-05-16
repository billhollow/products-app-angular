import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(readonly authService: AuthService){}
  private readonly TOKEN_KEY = 'products-app-token';

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined'){
      this.authService.handleLoginSuccess();
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  clearToken(): void {
    this.authService.handleLogoutSuccess();
    localStorage.removeItem(this.TOKEN_KEY);
  }
}