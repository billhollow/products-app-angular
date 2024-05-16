import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent, ProductAddEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ProductModule { }
