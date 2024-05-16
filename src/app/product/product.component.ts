import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './entities/product.entity';
import { ProductService } from './services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ConfirmationAlertComponent } from '../core/confirmation-alert/confirmation-alert.component';
import { SnackbarService } from '../core/confirmation-alert/services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'handle',
    'title',
    'description',
    'sku',
    'grams',
    'stock',
    'price',
    'comparePrice',
    'barcode',
    'action',
  ];
  products: Product[] = [];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private snackBarService: SnackbarService,
    private matDialog: MatDialog,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {},
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id: number) {
    
    this.matDialog.open(ConfirmationAlertComponent, {
      data: `Are you sure you want to delete that employee application?`,
    })
    .afterClosed()
    .subscribe((confirmed: Boolean) => {
      if (confirmed) {
        this.productService.deleteProduct(id).subscribe({
          next: (res) => {
            this.snackBarService.openSnackBar('Employee deleted!', 'done');
            this.loadProducts();
          },
          error: console.log,
        })
      }
    });
  }

  openEditProductForm(data: any) {
    console.log(data);
    const dialogRef = this.matDialog.open(ProductAddEditComponent, {
      width: '1000px',
      data: data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadProducts();
        }
      },
    });
  }
}
