import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ConfirmationAlertComponent } from './confirmation-alert/confirmation-alert.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
    ConfirmationAlertComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],

})
export class CoreModule { }
