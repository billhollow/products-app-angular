import { Component } from '@angular/core';
import { UserService } from '../user/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  username: string;
  email: string;
  password: string;

  constructor(
    private readonly userService: UserService, 
    private router: Router,
  ) {
    this.username = "";
    this.email = "";
    this.password = "";
  }

  registerUser() {
    this.userService.registerUser(this.username, this.email, this.password).subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        const errorsFormated: string[] = error['error']['message'].map((msg: string) => `<li>${msg}</li>`).join('\n');
        Swal.fire({
          icon: 'error',
          title: 'Invalid credentials',
          html: `<div style="text-align:left;"> <ul>${errorsFormated}</ul>`
        });
      }
    });
  }
}
