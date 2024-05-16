import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { TokenService } from '../core/auth/services/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private readonly loginService: LoginService, 
    private readonly tokenService: TokenService,
    private router: Router,
    private readonly authService: AuthService
  ) {
    this.username = "";
    this.password = "";
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.authService.handleLoginSuccess();
        this.tokenService.setToken(res['token']);
        this.router.navigate(['/product']);
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Username or Password',
          // text: error['error']['message'],
        });
      }
    });
  }
}
