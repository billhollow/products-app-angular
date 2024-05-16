import { Component, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from 'stream';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private loginService: LoginService) {
    this.username = "";
    this.password = "";
  }

  login() {
    // Implement login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.loginService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });

  }
}
