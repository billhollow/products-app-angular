import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // Other routes...
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  // { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'user', component: UserComponent },

  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
