import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userIsAuthenticated = false;

  constructor() {}

  handleLoginSuccess() {
    this.userIsAuthenticated = true;
  }

  handleLogoutSuccess() {
    this.userIsAuthenticated = false;
  }
  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.userIsAuthenticated;
  }
}
