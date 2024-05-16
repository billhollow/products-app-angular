import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [RegisterUserComponent]
})
export class RegisterUserModule { }
