import { Component, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor() { 
    this.username = "";
    this.password = "";
  }

  login() {
    // Implement login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
