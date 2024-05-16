import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'products-app-token';

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined')
      return localStorage.getItem(this.TOKEN_KEY);
    return null;
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}