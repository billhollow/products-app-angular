import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../core/confirmation-alert/services/snackbar.service';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrl: './product-add-edit.component.scss'
})
export class ProductAddEditComponent implements OnInit{
  productForm: FormGroup;
  originalValues: any;
  editedValues: any = {};

  constructor(
    private _fb: FormBuilder, 
    private _matDialogRef: MatDialogRef<ProductAddEditComponent>,
    private productService: ProductService, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbarService: SnackbarService,
    ) {
    this.productForm = this._fb.group({
      handle: '',
      title: '',
      description: '',
      sku: '',
      grams: '',
      stock: '',
      price: '',
      comparePrice: '',
      barcode: '',
    });
  }

  ngOnInit(): void {
    this.productForm.patchValue(this.data);
    // Store the original form values
    this.originalValues = this.productForm.value;
    this.editedValues = {};
    this.productForm.valueChanges.subscribe((changedValues) => {
      // Compare changed values with original values and send only the edited ones
      for (const key in changedValues) {
        if (changedValues[key] !== this.originalValues[key]) {
          this.editedValues[key] = changedValues[key];
        }
      }

      // Send only the edited values
      this.sendEditedValues(this.editedValues);
    });
  }

  sendEditedValues(editedValues: any): void {
    // Here, you can send the edited values to your backend API
    console.log('Edited values:', editedValues);
  }

  onFormSubmit() {
    if (this.productForm.valid){
      if (this.data) {
        this.productService
        .patchProduct(this.data.id, this.editedValues)
        .subscribe({
          next: (res) => {
            this.snackbarService.openSnackBar("Product updated successfully");
            this._matDialogRef.close(true);
          },
          error: (error: any) => {
            const errorsFormated: string[] = error['error']['message'].map((msg: string) => `<li>${msg}</li>`).join('\n');
            Swal.fire({
              icon: 'error',
              title: 'Acceso no autorizado',
              html: `<div style="text-align:left;"> <ul>${errorsFormated}</ul>`
            });
            // console.error(">>>ERROR: "+err);
          }
        })
      } else {
        this.productService.addProduct(this.productForm.value).subscribe({
          next: (res) => {
            this.snackbarService.openSnackBar("Product added successfully");
            this._matDialogRef.close(true);
          },
          error: (error: any) => {
            const errorsFormated: string[] = error['error']['message'].map((msg: string) => `<li>${msg}</li>`).join('\n');
            Swal.fire({
              icon: 'error',
              title: 'Acceso no autorizado',
              html: `<div style="text-align:left;"> <ul>${errorsFormated}</ul>`
            });
          }
        })
      }
      
      console.log(this.productForm.value);
    }
  }
}
