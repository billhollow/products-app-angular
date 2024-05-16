import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../auth/services/token.service';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor( 
    private readonly tokenService: TokenService,
    private router: Router,
    readonly authService: AuthService
  ) { }

  logout() {
    this.authService.handleLogoutSuccess();
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
