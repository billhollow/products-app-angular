import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
